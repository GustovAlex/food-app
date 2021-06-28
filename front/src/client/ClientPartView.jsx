import { useEffect } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import styled from "styled-components"
import { clientRoutes } from "./routes/index"
import Navbar from "./components/navBar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "./redux/actions/index"
import PropagateLoader from "react-spinners/PropagateLoader"
import "./clientPart.scss"

const ClientPartBasicStyles = styled.div`
    padding: 0;
    margin: 0;
    background: #fff;
    width: 100%;
    height: 100%;
`

export default function ClientPartView(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const { loading } = useSelector((state) => state.data)

    return (
        <>
            {!loading ? (
                <ClientPartBasicStyles>
                    <Router>
                        <Navbar />
                        <Switch>
                            {clientRoutes.map((el) => {
                                return (
                                    <Route
                                        key={el.text}
                                        path={el.path}
                                        component={el.component}
                                    />
                                )
                            })}
                            <Redirect to='/client/main' />
                        </Switch>
                    </Router>
                </ClientPartBasicStyles>
            ) : (
                <div className='propagateLoader'>
                    <PropagateLoader color={"#FF8302"} size={20} />
                </div>
            )}
        </>
    )
}
