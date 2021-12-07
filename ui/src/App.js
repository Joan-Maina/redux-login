import Signup from "./pages/Signup";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const isAuthenticated = state.isAuthenticated;
  return (
    <Router>
      <div className="App">
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch className="App">
          <Route className="path" exact path="/signup" component={Signup} />
          {/* <Route className="path" exact path="/home" component={Home} /> */}

          <PrivateRoute
            className="path"
            exact
            path="/home"
            component={Home}
            isAuthenticated={isAuthenticated}
          />

          <Route className="path" exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
