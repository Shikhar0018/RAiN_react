import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contact';
import Services from './pages/services';
import Products from './pages/products';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className = "content">
          
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/contactus">
              <ContactUs />
            </Route>
            <Route exact path = "/products">
              <Products />
            </Route>
            <Route exact path = "/services">
              <Services />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
