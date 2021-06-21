import ClientPart from "./client/ClientPart"
import AdminPart from "./admin/AdminPart"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/client' component={ClientPart} />
                <Route path='/admin' exact component={AdminPart} />
            </Switch>
        </Router>
    )
}

export default App
