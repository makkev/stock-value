import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useStyles } from './watchlist.styles';
import { SECURITY_LIST } from '../../redux/security-list/security-list.data';
import { EPS_DATA, PE_DATA } from '../../redux/pe/pe.data';
import SecurityDetails from '../../components/security-details/security-details.component';

const SCREEN = {
  INDEX: 'INDEX',
  DETAILS: 'DETAILS',
};

const Watchlist = ({ setMenu }) => {
  const classes = useStyles();

  const [screen, setScreen] = useState(SCREEN.INDEX);

  useEffect(() => {
    setMenu(0);
  }, []);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    console.log(PE_DATA[newValue]);
    console.log(EPS_DATA[newValue]);
    setScreen(SCREEN.DETAILS);
  };

  return (
    screen === SCREEN.INDEX && (
      <div>
        <Container>
          <Typography variant="h5" className={classes.title}>
            Watchlist
          </Typography>
          <Autocomplete
            // id="combo-box-demo"
            options={SECURITY_LIST}
            // getOptionLabel={option =>
            //   `${option.securityCode} - ${option.securityDescription}`
            // }
            // getOptionLabel={SECURITY_LIST}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Add security" variant="outlined" />
            )}
            onChange={handleChange}
          />
        </Container>
      </div>
    )
  );
};

export default Watchlist;
