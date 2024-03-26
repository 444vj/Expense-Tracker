import { useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";

function App() {
  // maintaining a state called 'active' in order to keep track of the current selected item (amongst Dashboard, Transactions,Incomes,Expenses )
  const [active, setActive] = useState(1);


  return (
    <AppStyled bg={bg}>
      <Orb />
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  position: relative;
`;

export default App;
