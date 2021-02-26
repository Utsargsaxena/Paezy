import React from 'react'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavLinks,NavMenu,NavItem} from './NavbarElements'
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
       <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Paezy</NavLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                     <NavLinks to="about">About</NavLinks>
                    </NavItem>

                </NavMenu>
            </NavbarContainer>
        </Nav>
       </>
    )
}

export default Navbar
