import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { clientRoutes } from "../../routes/index"

const NavBarStyled = styled.div`
    background: repeat-x center top url(./img/navBarBG.png);
    width: 100vw;
    padding: 0 10px;
    box-sizing: border-box;
`

const NavBarStyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    color: #fff;
`

const NavBarStyledLogo = styled.img`
    padding-top: 0;
`

const NavItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    text-decoration: none;
    .navLink {
        text-decoration: none;

        margin-left: 20px;
        text-transform: uppercase;
        color: #fff;
        transition: color 0.4s ease;

        &:hover {
            color: #ff8302;
            cursor: pointer;
        }
        &.active {
            color: #ff8302;
        }
    }
`

const BasketWrap = styled.div`
    position: relative;
    &:hover {
        cursor: pointer;
    }
`

const Basket = styled.img`
    padding-top: 20px;
    height: 60px;
    width: 60px;
`

const BasketCount = styled.span`
    display: flex;
    height: 25px;
    width: 25px;
    background-color: #ff8302;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 35px;
    left: 22px;
`

export default function Navbar({ ordersCount }) {
    return (
        <NavBarStyled>
            <NavBarStyledContent>
                <NavBarStyledLogo src='./img/logo.svg' alt='logo' />
                <NavItemWrap>
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
                </NavItemWrap>
                <BasketWrap>
                    <Basket src='./img/basket.png' alt='basket' />
                    <BasketCount>{ordersCount ? ordersCount : 0}</BasketCount>
                </BasketWrap>
            </NavBarStyledContent>
        </NavBarStyled>
    )
}
