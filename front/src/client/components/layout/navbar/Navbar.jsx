import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { clientRoutes } from "../../../routes/index"
import logo from "../../../img/logo.svg"
import cartIcon from "../../../img/basket.png"
import "./navbarStyles.scss"
import ButtonLink from "../../common/button/buttonLink/ButtonLink"

export default function Navbar({ ordersCount }) {
    const { productList } = useSelector((state) => state.data)
    const NumberOfNewProducts = productList.filter(
        (product) => product.isNewProduct == true
    ).length

    const NumberOfNPromotionProducts = productList.filter(
        (product) => product.isPromotionProduct == true
    ).length

    console.log("lenght", NumberOfNewProducts)
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
                    <ButtonLink
                        buttonText={`promotion ${NumberOfNPromotionProducts}`}
                        path='/client/promotion'
                    />
                    <ButtonLink
                        buttonText={`new ${NumberOfNewProducts}`}
                        path='/client/new'
                    />
                </div>
            </div>
        </div>
    )
}
