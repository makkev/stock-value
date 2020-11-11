import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Typography } from '@material-ui/core';

import { setInputs } from '../../redux/pe/pe.actions';

import { useStyles } from './pe.styles.js';

import PEInputs from '../../components/pe-inputs/pe-inputs.component';

function PEPage({ setInputs }) {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="h4" className={classes.title}>
          PE Valuation
        </Typography>
        <PEInputs setInputs={setInputs} />
      </Container>
    </div>
  );
}

// const mapStateToProps = state => ({
//   inputs: state.pe.inputs,
// });

const mapDispatchToProps = dispatch => ({
  setInputs: inputs => dispatch(setInputs(inputs)),
});

export default connect(null, mapDispatchToProps)(PEPage);
