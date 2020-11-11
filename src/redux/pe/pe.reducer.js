const INITIAL_STATE = {
  inputs: {
    eps: null,
    medianHistoricalPE: null,
    expectedGrowthRate: null,
    marginOfSafety: null,
    conservativeGrowthRate: null,
    discountRate: null,
  },
};

const peReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_INPUTS':
      return {
        ...state,
        inputs: {
          eps: action.payload.eps,
          medianHistoricalPE: action.payload.medianHistoricalPE,
          expectedGrowthRate: action.payload.expectedGrowthRate,
          marginOfSafety: action.payload.marginOfSafety,
          conservativeGrowthRate: action.payload.conservativeGrowthRate,
          discountRate: action.payload.discountRate,
        },
      };
    default:
      return state;
  }
};

export default peReducer;
