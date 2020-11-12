import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  paper: {
    margin: '1em 3em 2em 3em',
    padding: '0.5em 1em 1.5em 1em',
  },
  container: {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    marginBottom: '1em',
  },
  table: {
    maxWidth: '18em',
  },
  yearCol: {
    width: '2em',
  },
  finalVal: {
    color: '#4433ff',
    marginBottom: '0.5em',
  },
}));
