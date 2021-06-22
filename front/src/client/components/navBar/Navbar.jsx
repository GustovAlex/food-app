import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { clientRoutes } from "../../routes/index"
import navBarBg from "../../img/navBarBG.png"
import logo from "../../img/logo.svg"
import cartIcon from "../../img/basket.png"
import "./navbarStyles.scss"

export default function Navbar({ ordersCount }) {
    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img className='navbar-content-logo' src={logo} alt='logo' />
                <div className='navbar-content-links'>
                    {clientRoutes.map((el) => {
                        return (
                            <NavLink
                                to={el.path}
                                key={el.text}
                                className='navLink'
                                activeClassName='active'>
                                {el.text}
                            </NavLink>
                        )
                    })}
                </div>
                <NavLink
                    to='/client/cart'
                    className='navbar-content-cartButton'>
                    <img
                        className='navbar-content-cartButton-icon'
                        src={cartIcon}
                        alt='basket'
                    />
                    <span className='navbar-content-cartButton-count'>
                        {ordersCount ? ordersCount : 0}
                    </span>
                </NavLink>
            </div>
        </div>
    )
}
