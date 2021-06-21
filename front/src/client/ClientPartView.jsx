import { useEffect, useState } from "react"
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
import { getCategories, togleIsLoading } from "./redux/actions/index"
import PropagateLoader from "react-spinners/PropagateLoader"

const ClientPartBasicStyles = styled.div`
    padding: 0;
    margin: 0;
    background: #fff;
    width: 100%;
    height: 100vh;
`

export default function ClientPartView() {
    const dispatch = useDispatch()
    const { isLoading } = useSelector((state) => state.data)
    console.log("isLoading", isLoading)
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <>
            {!isLoading ? (
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
                            {/* <Redirect to='/client/main' /> */}
                        </Switch>
                    </Router>
                </ClientPartBasicStyles>
            ) : (
                <PropagateLoader color={"#FF8302"} size={20} />
            )}
        </>
    )
}
