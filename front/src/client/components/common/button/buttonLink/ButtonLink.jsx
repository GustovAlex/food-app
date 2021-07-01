import "./buttonLinkStyles.scss"
import { NavLink } from "react-router-dom"

export default function ButtonLink({ buttonText, path }) {
    return (
        <div className='buttonLink'>
            <NavLink
                to={path}
                className='buttonLink-navLink'
                activeClassName='active'>
                {buttonText}
            </NavLink>
        </div>
    )
}
