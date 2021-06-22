import "./main-admin-styles.css"
import LoginAdminPage from "./pages/LoginAdminPage"
import NavbarContainer from "./components/navbar/NavbarContainer"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import { adminRoutes } from "./routes"
import PropagateLoader from "react-spinners/PropagateLoader"

export default function AdminPartView({ isLogin, isLoading }) {
    return (
        <main>
            {!isLogin ? (
                <div className='container dispaly-flex-center'>
                    <LoginAdminPage />
                </div>
            ) : (
                <>
                    {!isLoading ? (
                        <Router>
                            <NavbarContainer />
                            <Switch>
                                {adminRoutes.map((el) => {
                                    return (
                                        <Route
                                            key={el.path}
                                            path={el.path}
                                            component={el.component}
                                        />
                                    )
                                })}
                                <Redirect to='/admin/categories' />
                            </Switch>
                        </Router>
                    ) : (
                        <PropagateLoader color={"#FF8302"} size={20} />
                    )}
                </>
            )}
        </main>
    )
}
