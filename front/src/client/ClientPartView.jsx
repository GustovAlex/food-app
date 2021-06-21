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
import { useDispatch } from "react-redux"
import { getCategories } from "./redux/actions/index"

const ClientPartBasicStyles = styled.div`
    padding: 0;
    margin: 0;
    background: #fff;
    width: 100%;
    height: 100vh;
`

export default function ClientPartView() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
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
                    <Redirect to='/main' />
                </Switch>
            </Router>
        </ClientPartBasicStyles>
    )
}
