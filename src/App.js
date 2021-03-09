import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stations from './components/pages/Stations';
import Bills from './components/pages/Bills';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Statistics from './components/pages/Statistics';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/charging_stations' component={Stations} />
          <Route path='/bills' component={Bills} />
          <Route path='/statistics' component={Statistics} />
          <Route path='/login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
