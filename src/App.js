import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Flights from './components/Flights';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/cart' Component={ShoppingCart} />
          <Route path='/about' Component={About} /> 
          <Route path='/contact' Component={Contact} /> 
          <Route path='/flights' Component={Flights} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
