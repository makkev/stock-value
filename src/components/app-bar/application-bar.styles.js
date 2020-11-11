import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#4433ff',
  },
  appbar: {
    marginBottom: '3em',
    boxShadow: '0px 0px 0px 0px',
  },
}));
