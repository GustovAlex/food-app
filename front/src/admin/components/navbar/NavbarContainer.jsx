import React, { useState } from "react"
import Navbar from "./Navbar"
import { logout } from "../../redux/actions/loginAdmin"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function NavbarContainer() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const onLogoutClick = () => {
        localStorage.removeItem("Authorization")
        history.push("/admin")
        dispatch(logout())
    }

    const onBurgerClickOpenHandler = () => setIsOpenMenu(true)
    const onCrossClickCloseHandler = () => setIsOpenMenu(false)

    return (
        <Navbar
            onLogoutClick={onLogoutClick}
            isOpenMenu={isOpenMenu}
            onBurgerClickOpenHandler={onBurgerClickOpenHandler}
            onCrossClickCloseHandler={onCrossClickCloseHandler}
        />
    )
}
