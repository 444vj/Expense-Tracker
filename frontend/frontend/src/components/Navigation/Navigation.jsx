import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

const Navigation = () => {

    const NavStyled = styled.nav`
        
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

        </ul>
    </NavStyled>
  )
}

export default Navigation