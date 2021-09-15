import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography variant="h5" className={classes.title}>
            EcoFinca
          </StyledTypography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)`
  background-color: #b7e4c7;
`;

const StyledTypography = styled(Typography)`
  color: #1b4332;
`;
