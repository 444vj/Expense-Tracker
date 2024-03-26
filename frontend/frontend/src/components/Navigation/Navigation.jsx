import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/MenuItems";
import { signout } from "../../utils/Icons.jsx";

const Navigation = ({active, setActive}) => {


  const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-container{
      height: 100px;
      display: flex;
      align-items: center;
      gap: 1rem;
      img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        padding: .2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
      }
      h2{
        color: rgba(34, 34, 96, 1);
      }
      p{
        color: rgba(34, 34, 96, 0.7);
      }
    }
    .menu-items{
      display: flex;
      flex: 1;
      flex-direction: column;
      li{
        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;
        margin: 0.6rem 0;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        position: relative;
        i{
          color: rgba(34, 34, 96, 0.7);
          font-size: 1.4 rem;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  `;

  return (
    <NavStyled>
      <div className="user-container">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Jay</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return <li 
          key={item.id}
          onClick={() => setActive(item.id)}
          >
            {item.icon}
            <span>{item.title}</span>
            </li>;
        })}
      </ul>

      <div className="bottom-nav">
        <li>
          {signout} Sign Out
        </li>
      </div>
    </NavStyled>
  );
};

export default Navigation;
