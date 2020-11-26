import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useStyles } from './application-bar.styles.js';
import { getPageUrl } from './application-bar.utils.js';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ApplicationBar = ({ menu, setMenu, history }) => {
  const classes = useStyles();

  useEffect(() => {
    history.push(getPageUrl(menu));
  }, []);

  const handleChange = (event, newValue) => {
    setMenu(newValue);
    history.push(getPageUrl(newValue));
  };

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Stock Valuation
          </Typography>
          <Tabs
            value={menu}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Watchlist" {...a11yProps(0)} />
            <Tab label="PE Valuation" {...a11yProps(1)} />
            <Tab label="DCF Valuation" {...a11yProps(2)} />
            <Tab label="ROE Valuation" {...a11yProps(3)} />
          </Tabs>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ApplicationBar);
