import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SignIn from './components/signin/signin.component';
import DCFPage from './pages/dcf/dcf.component';
import HomePage from './pages/homepage/homepage.component';
import PEPage from './pages/pe/pe.component';
import ROEPage from './pages/roe/roe.component';
import Watchlist from './pages/watchlist/watchlist.component';

function App() {
  const [menu, setMenu] = useState(0);
  console.log('menu: ', menu);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PEPage} />
        <Route path="/PE" component={PEPage} />
        <Route path="/watchlist" component={Watchlist} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
