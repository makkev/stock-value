import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useStyles } from './application-bar.styles.js';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ApplicationBar = ({ menu, setMenu, history }) => {
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setMenu(newValue);
    switch (newValue) {
      case 0:
        history.push('/PE');
        break;
      case 1:
        history.push('DCF');
        break;
      case 2:
        history.push('ROE');
        break;
      default:
        history.push('/');
        break;
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Stock Valuation
          </Typography>
          <Tabs
            value={menu}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="PE Valuation" {...a11yProps(0)} />
            <Tab label="DCF Valuation" {...a11yProps(1)} />
            <Tab label="ROE Valuation" {...a11yProps(2)} />
          </Tabs>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ApplicationBar);
