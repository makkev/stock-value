import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  paper: {
    // marginTop: '1em',
    margin: '1em 3em 2em 3em',

    padding: '0 1em 1.5em 1em',
    // boxShadow: '0px 0px 0px 0px',
  },
  container: {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    marginBottom: '1em',
  },
  button: {
    '&:hover': {
      // backgroundColor: '#9bcff2',
    },
  },
}));
