import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Bye from "./pages/Bye";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export function Routes() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/bye">Bye</Link>
          </div>
        </header>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/bye" component={Bye} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
