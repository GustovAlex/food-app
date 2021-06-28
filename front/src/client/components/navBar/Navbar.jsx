import { NavLink } from "react-router-dom"
import { clientRoutes } from "../../routes/index"
import logo from "../../img/logo.svg"
import cartIcon from "../../img/basket.png"
import "./navbarStyles.scss"
import Button from "../common/button/Button"

export default function Navbar({ ordersCount }) {
    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img className='navbar-content-logo' src={logo} alt='logo' />
                <div className='navbar-content-links'>
                    {clientRoutes.map((el) => {
                        return el.isFromMenu ? (
                            <NavLink
                                to={el.path}
                                key={el.path}
                                className='navLink'
                                activeClassName='active'>
                                {el.text}
                            </NavLink>
                        ) : null
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
                <div className='navbar-content-bottomButtom'>
                    <Button buttonText='promotion' path='/client/promotion' />
                    <Button buttonText='new' path='/client/new' />
                </div>
            </div>
        </div>
    )
}
