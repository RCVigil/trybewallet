import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/" render={ Login } />
        Hello, TrybeWallet!
        <Route exact path="/Wallet" render={ Wallet } />
      </div>
    </Switch>
  );
}

export default App;
