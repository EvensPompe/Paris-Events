import "./Main.css";
import Home from "../Views/Home";
import Register from "../Views/Register";
import Login from "../Views/Login";
import { Switch, Route } from "react-router-dom";
function Main() {
    return (
        <div id="main" className="w-screen bg-pink-200">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;