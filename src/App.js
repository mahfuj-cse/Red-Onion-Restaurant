import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { AuthContextProvider } from "./components/useAuth/useAuth";
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
