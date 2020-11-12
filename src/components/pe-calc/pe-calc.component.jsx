import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Zoom,
} from '@material-ui/core';

import { useStyles } from './pe-calc.styles.js';

const YEARS = 5;

const delay = t =>
  new Promise(resolve => {
    setTimeout(() => resolve('wait...'), t);
  });

const PECalc = ({ inputs }) => {
  const {
    eps,
    medianHistoricalPE,
    expectedGrowthRate,
    marginOfSafety,
    discountRate,
  } = inputs;

  const classes = useStyles();
  console.log('inputs: ', inputs);

  const [annualVal, setAnnualVal] = useState([]);
  const [conservativeGrowthRate, setConservativeGrowthRate] = useState(0);
  const [finalVal, setFinalVal] = useState(0);
  const [presentVal, setPresentVal] = useState(null);
  const [zoomIn, setZoomIn] = useState(true);

  console.log('annualVal: ', annualVal);

  useEffect(() => {
    let rate = (expectedGrowthRate * (1 - marginOfSafety / 100)).toFixed(2);
    let val = [];
    val[0] = (eps * (1 + rate / 100)).toFixed(2);
    for (let i = 1; i < YEARS; i++) {
      val[i] = (val[i - 1] * (1 + rate / 100)).toFixed(2);
    }
    setAnnualVal(val);
    setConservativeGrowthRate(rate);

    setFinalVal(val[val.length - 1] * medianHistoricalPE);
  }, [eps, expectedGrowthRate, marginOfSafety, medianHistoricalPE]);

  useEffect(() => {
    setPresentVal((finalVal / (1 + discountRate / 100) ** 5).toFixed(2));
  }, [finalVal, discountRate]);

  useEffect(() => {
    async function zooming() {
      setZoomIn(false);
      await delay(150);
      setZoomIn(true);
    }
    zooming();
  }, [presentVal]);

  return (
    <div>
      {presentVal > 0 && (
        <Zoom in={zoomIn}>
          <Paper className={classes.paper}>
            <Typography variant="h4" className={classes.finalVal}>
              ${presentVal}
            </Typography>
            <div className={classes.container}>
              <div>
                <Table className={classes.table} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.yearCol} align="right">
                        Year
                      </TableCell>
                      <TableCell align="right">EPS * Growth rate</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {annualVal.map((val, i) => (
                      <TableRow key={i}>
                        <TableCell align="right">{i + 1}</TableCell>
                        <TableCell align="right">{val}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className={classes.calcInfo}>
                <Typography component="p">
                  Conservative growth rate:{' '}
                  <strong>{conservativeGrowthRate}%</strong>
                </Typography>
                <Typography component="p">
                  Value in 5 years: <strong>${finalVal}</strong>
                </Typography>
                <Typography component="p">
                  Present Value: <strong>${presentVal}</strong>
                </Typography>
              </div>
            </div>
          </Paper>
        </Zoom>
      )}
    </div>
  );
};

export default PECalc;
