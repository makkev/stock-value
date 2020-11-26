import React, { useState } from 'react';
import { Button, Paper, TextField, ThemeProvider } from '@material-ui/core';

import { useStyles } from './pe-inputs.styles.js';
import { textFieldTheme } from '../../theme/theme.js';

function PEInputs({ inputs, setInputs }) {
  const classes = useStyles();

  const [currentInputs, setCurrentInputs] = useState({
    eps: 11.89,
    medianHistoricalPE: 15.4,
    expectedGrowthRate: 9.86,
    marginOfSafety: 25,
    discountRate: 9,
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
      <Paper className={classes.paper}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={classes.container}>
            <ThemeProvider theme={textFieldTheme}>
              {/* EPS */}
              <div>
                <TextField
                  id="standard-number"
                  label="EPS"
                  value={currentInputs.eps}
                  name="eps"
                  onChange={handleChange}
                  type="number"
                  className={classes.textField}
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                />
              </div>
            </ThemeProvider>
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            disableElevation
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default PEInputs;
