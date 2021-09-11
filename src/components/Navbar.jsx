import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Material-POC
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          POC
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
