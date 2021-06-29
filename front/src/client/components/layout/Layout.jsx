import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import "./layoutStyles.scss"

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
