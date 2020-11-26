import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import { setInputs } from '../../redux/pe/pe.actions';

import { useStyles } from './pe.styles.js';

import PEInputs from '../../components/pe-inputs/pe-inputs.component';
import PECalc from '../../components/pe-calc/pe-calc.component';

function PEPage({ inputs, setInputs, setMenu }) {
  const classes = useStyles();

  useEffect(() => {
    setMenu(1);
  }, []);

  return (
    <div>
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
