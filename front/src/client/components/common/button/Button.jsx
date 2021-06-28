import "./buttonStyles.scss"
import { NavLink } from "react-router-dom"

export default function Button({ buttonText, path }) {
    return (
        <div className='button'>
            <NavLink
                to={path}
                className='button-navLink'
                activeClassName='active'>
                {buttonText}
            </NavLink>
        </div>
    )
}
