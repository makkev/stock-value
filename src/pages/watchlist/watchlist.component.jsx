import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Container, TextField, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
  const [watchList, setWatchList] = useState({});

  console.log('currentUser: ', currentUser);
  console.log('watchList: ', watchList);

  useEffect(() => {
    fetch('http://localhost:3000/securityList')
      .then(response => response.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    const fetchWatchList = async () => {
      const response = await fetch('http://localhost:3000/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: currentUser,
        }),
      });
      const data = await response.json();

      let rec = null;
      let watchlist = {};
      for (const securityCode of data) {
        rec = await fetch(
          `http://localhost:3000/securityDetails/${securityCode}`
        );
        watchlist[securityCode] = await rec.json();
      }
      return watchlist;
    };
    fetchWatchList().then(response => setWatchList(response));
  }, [currentUser]);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    // console.log(PE_DATA[newValue]);
    // console.log(EPS_DATA[newValue]);

    setScreen(SCREEN.DETAILS);
  };
  console.log(
    'watchlist: ',
    Object.keys(watchList).map((key, index) => watchList[key].price.value)
  );

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
            {watchList && (
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Security Code</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Value</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(watchList).map((key, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {key}
                        </TableCell>
                        <TableCell align="right">
                          {watchList[key].price.value}
                        </TableCell>
                        <TableCell align="right">
                          {watchList[key].peCalc.presentValue.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
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
