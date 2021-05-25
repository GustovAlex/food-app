import ClientPart from './client/ClientPart'
import AdminPart from './admin/AdminPart'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ClientPart} />
        <Route path="/admin" component={AdminPart} />
      </Switch>
    </Router>
  );
}

export default App;
