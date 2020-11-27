import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';

import { useStyles } from './application-bar.styles.js';
import { getPageUrl } from './application-bar.utils.js';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const tabIndex = {
  '/': 0,
  '/pe': 0,
  '/watchlist': 1,
  '/signin': 9,
};

const ApplicationBar = ({ route }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Stock Valuation
          </Typography>
          <Tabs
            value={tabIndex[route.toLowerCase()]}
            aria-label="simple tabs example"
          >
            <Tab
              label="PE Valuation"
              component={Link}
              underline="none"
              href={'/pe'}
              {...a11yProps(0)}
            />
            <Tab
              label="Watchlist"
              component={Link}
              underline="none"
              href={'/watchlist'}
              {...a11yProps(1)}
            />
            <Tab
              label="Signin"
              component={Link}
              underline="none"
              href={'/signin'}
              {...a11yProps(9)}
            />
            {/* <Tab label="DCF Valuation" {...a11yProps(2)} />
            <Tab label="ROE Valuation" {...a11yProps(3)} /> */}
          </Tabs>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ApplicationBar);
