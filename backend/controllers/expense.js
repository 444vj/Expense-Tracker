const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  // Validation checks
  const errors = [];
  if (!title) {
    errors.push("Title is required");
  }
  if (!category) {
    errors.push("Category is required");
  }
  if (!description) {
    errors.push("Description is required");
  }
  if (!date) {
    errors.push("Date is required");
  }
  if (amount <= 0 || isNaN(amount)) {
    // Check for positive number and NaN
    errors.push("Amount must be a positive number");
  }

  // Return validation errors if any
  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(", ") });
  }

  try {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res
        .status(400)
        .json({ message: "Invalid Date format. Use YYYY-MM-DD." });
    }

    // Create a new Expense object
    const expense = new ExpenseSchema({
      title,
      amount: Number(amount),
      category,
      description,
      date,
    });

    const validationError = expense.validateSync();
    if (validationError) {
      const errors = validationError.errors;
      return res
        .status(400)
        .json({ message: errors.map((error) => error.message).join(", ") });
    }

    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } 
  catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" }); // More specific message
  }

  // Removed console.log(income) - not needed for functionality
};

exports.getExpenses = async (req, res) => {
  try 
  {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } 
  catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  try 
  {
    await ExpenseSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Expense Deleted" });
  } 
  catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
