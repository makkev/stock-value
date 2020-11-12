import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import ApplicationBar from './components/app-bar/application-bar.component';
import DCFPage from './pages/dcf/dcf.component';
import HomePage from './pages/homepage/homepage.component';
import PEPage from './pages/pe/pe.component';
import ROEPage from './pages/roe/roe.component';

function App() {
  const [menu, setMenu] = useState(0);

  return (
    <div className="App">
      <ApplicationBar menu={menu} setMenu={setMenu} />
      <Switch>
        <Route exact path="/">
          <HomePage setMenu={setMenu} />
        </Route>
        <Route path="/PE">
          <PEPage setMenu={setMenu} />
        </Route>
        <Route path="/DCF">
          <DCFPage setMenu={setMenu} />
        </Route>
        <Route path="/ROE">
          <ROEPage setMenu={setMenu} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
