import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";

const Incomes = () => {
    const IncomesStyled = styled.div``;

    const { addIncome } = useGlobalContext();

    return (
        <IncomesStyled>
        <InnerLayout>
            <h1>Incomes</h1>
            <div className="income-content">
            <div className="form-container">
                <Form />
                <div className="incomes"></div>
            </div>
            </div>
        </InnerLayout>
        </IncomesStyled>
    );
};

export default Incomes;
