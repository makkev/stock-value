import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

import { setInputs } from '../../redux/pe/pe.actions';

import { useStyles } from './pe.styles.js';

function PEPage({ inputs, setIputs }) {
  const classes = useStyles();

  const [currentInputs, setCurrentInputs] = useState({
    eps: 11.89,
    medianHistoricalPE: 15.4,
    expectedGrowthRate: 0.986,
    marginOfSafety: 0.25,
    conservativeGrowthRate: 0.74,
    discountRate: 0.09,
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setCurrentInputs(prevInputs => ({
      ...prevInputs,
      [name]: value === '' ? '' : Number(value),
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    setInputs(currentInputs);
  };

  return (
    <div>
      <Container>
        <Typography variant="h4" className={classes.title}>
          PE Valuation
        </Typography>
        <Paper className={classes.paper}>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className={classes.container}>
              {/* EPS */}
              <div>
                <TextField
                  id="standard-number"
                  label="EPS"
                  value={currentInputs.eps}
                  name="eps"
                  onChange={handleChange}
                  type="number"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>

              {/* Median historical P/E */}
              <div>
                <TextField
                  id="standard-number"
                  label="Median historical P/E"
                  value={currentInputs.medianHistoricalPE}
                  name="medianHistoricalPE"
                  onChange={handleChange}
                  type="number"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>

              {/* Expected growth rate */}
              <div>
                <TextField
                  id="standard-number"
                  label="Expected growth rate"
                  value={currentInputs.expectedGrowthRate}
                  name="expectedGrowthRate"
                  onChange={handleChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>

              {/* Margin of Safety */}
              <div>
                <TextField
                  id="standard-number"
                  label="Margin of Safety"
                  value={currentInputs.marginOfSafety}
                  name="marginOfSafety"
                  onChange={handleChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>

              {/* Conservative growth rate */}
              <div>
                <TextField
                  disabled
                  id="standard-number"
                  label="Conservative growth rate"
                  value={currentInputs.conservativeGrowthRate.toFixed(2)}
                  name="conservativeGrowthRate"
                  onChange={handleChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="filled"
                />
              </div>

              {/* Discount Rate */}
              <div>
                <TextField
                  id="standard-number"
                  label="Discount rate"
                  value={currentInputs.discountRate}
                  name="discountRate"
                  onChange={handleChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  inputs: state.pe.inputs,
});

const mapDispatchToProps = dispatch => ({
  setInputs: inputs => dispatch(setInputs(inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PEPage);
