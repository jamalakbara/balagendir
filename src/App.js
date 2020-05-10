import React, { useState } from "react";
import gambar from "./img/gambarHome.svg";
import "./css/style.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home gambar={gambar} title="Balagendir" />}
          />
          <Route path="/about" exact render={() => <About title="About" />} />}
          />
          <Route path="/login" exact render={() => <Login title="Login" />} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
