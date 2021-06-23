import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "../common/button/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"
import CloseIcon from "@material-ui/icons/Close"
import { NavLink } from "react-router-dom"
import { adminRoutes } from "../../routes"
import useStyles from "./navbarStyles"

export default function Navbar({
    onLogoutClick,
    isOpenMenu,
    onBurgerClickOpenHandler,
    onCrossClickCloseHandler,
}) {
    const classes = useStyles()
    return (
        <AppBar position='fixed' className={classes.navbarBackground}>
            <Toolbar className={classes.navbarContainer}>
                <IconButton
                    className={classes.menuButton}
                    edge='start'
                    color='primary'
                    aria-label='menu'
                    onClick={onBurgerClickOpenHandler}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    style={{ display: isOpenMenu ? "block" : "none" }}
                    variant='persistent'
                    anchor='left'
                    open={isOpenMenu}>
                    <ul className={classes.menuNavLinksList}>
                        <IconButton
                            color='primary'
                            onClick={onCrossClickCloseHandler}>
                            <CloseIcon />
                        </IconButton>
                        {adminRoutes.map((el) => {
                            return (
                                <li key={el.text}>
                                    <NavLink
                                        className={`${classes.navBarLink} ${classes.menuLink}`}
                                        activeClassName={
                                            classes.selectedNavBarLink
                                        }
                                        to={el.path}
                                        onClick={onCrossClickCloseHandler}>
                                        {el.text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </Drawer>
                <ul className={classes.navLinksList}>
                    {adminRoutes.map((el) => {
                        return (
                            <li key={el.text}>
                                <NavLink
                                    className={classes.navBarLink}
                                    activeClassName={classes.selectedNavBarLink}
                                    to={el.path}>
                                    {el.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <Button text='Logout' onClick={onLogoutClick} />
            </Toolbar>
        </AppBar>
    )
}
