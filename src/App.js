import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Gallery from "./Gallery"
import Contact from "./Contact"
import { useStateValue } from './StateProvider';
import Login from "./Login"
import Footer from "./Footer"
import Members from './Members';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <div class="app_body">
            <Router>
              <Navbar />
              <Switch>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/gallery">
                  <Gallery />
                </Route>
                <Route path="/about">
                  <Members />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </div>
        )}
    </div>
  );
}

export default App;
