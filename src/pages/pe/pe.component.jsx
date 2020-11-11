import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

import { useStyles } from './pe.styles.js';

function PEPage() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography variant="h4" className={classes.title}>
          PE Valuation
        </Typography>
        <Paper className={classes.paper}>
          <form>
            <div className={classes.container}>
              {/* EPS */}
              <div>
                <TextField
                  id="standard-number"
                  label="EPS"
                  // value={inputs.eps}
                  value={1}
                  name="eps"
                  // onChange={handleChange}
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
                  // value={inputs.medianHistPE}
                  value={1}
                  name="medianHistPE"
                  // onChange={handleChange}
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
                  // value={inputs.expectGrowthRate}
                  value={1}
                  name="expectGrowthRate"
                  // onChange={handleChange}
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
                  // value={inputs.marginSafety}
                  value={1}
                  name="marginSafety"
                  // onChange={handleChange}
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
                  // value={inputs.conservGrowthRt.toFixed(2)}
                  value={1}
                  name="conservGrowthRt"
                  // onChange={handleChange}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  variant="filled"
                />
              </div>

              {/* Growth decline rate */}
              <div>
                <TextField
                  id="standard-number"
                  label="Growth decline rate"
                  // value={inputs.growthDeclineRt}
                  value={1}
                  name="growthDeclineRt"
                  // onChange={handleChange}
                  type="number"
                  className={classes.textField}
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
                  // value={inputs.discountRt}
                  value={1}
                  name="discountRt"
                  // onChange={handleChange}
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
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default PEPage;
