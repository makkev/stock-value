import React from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import { setInputs } from '../../redux/pe/pe.actions';

import PEInputs from '../../components/pe-inputs/pe-inputs.component';
import PECalc from '../../components/pe-calc/pe-calc.component';
import ApplicationBar from '../../components/app-bar/application-bar.component';

import { useStyles } from './pe.styles.js';

function PEPage({ inputs, setInputs, location }) {
  const classes = useStyles();

  return (
    <div>
      <ApplicationBar route={location.pathname} />
      <Container>
        <Typography variant="h5" className={classes.title}>
          PE Valuation
        </Typography>
        <PEInputs setInputs={setInputs} />
        <PECalc inputs={inputs} />
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
