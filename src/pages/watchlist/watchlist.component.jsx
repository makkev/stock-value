import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { SECURITY_LIST } from '../../redux/security-list/security-list.data';
import { EPS_DATA, PE_DATA } from '../../redux/pe/pe.data';
import SecurityDetails from '../../components/security-details/security-details.component';
import SignIn from '../../components/signin/signin.component';
import ApplicationBar from '../../components/app-bar/application-bar.component';

import { useStyles } from './watchlist.styles';

const SCREEN = {
  INDEX: 'INDEX',
  DETAILS: 'DETAILS',
};

const Watchlist = ({ location, history, currentUser }) => {
  const classes = useStyles();

  const [screen, setScreen] = useState(SCREEN.INDEX);

  useEffect(() => {
    // setMenu(1);

    fetch('http://localhost:3000/securityList')
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(console.log);
  }, []);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    // console.log(PE_DATA[newValue]);
    // console.log(EPS_DATA[newValue]);

    setScreen(SCREEN.DETAILS);
  };

  console.log('history: ', history);

  return (
    <div>
      {currentUser === null ? (
        <SignIn />
      ) : (
        <div>
          <ApplicationBar route={location.pathname} />
          <Container>
            <Typography variant="h5" className={classes.title}>
              Watchlist
            </Typography>
            <Autocomplete
              options={SECURITY_LIST}
              // getOptionLabel={SECURITY_LIST}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField
                  {...params}
                  label="Add security"
                  variant="outlined"
                />
              )}
              onChange={handleChange}
            />
          </Container>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Watchlist);
