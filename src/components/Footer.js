import React from "react";
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

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

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StyledAppBar position="static">
        <StyledTypography variant="h5"> Contáctanos</StyledTypography>
      </StyledAppBar>
    </div>
  );
};

export default Footer;

const StyledAppBar = styled(AppBar)`
  background-color: #b7e4c7;
`;

const StyledTypography = styled(Typography)`
  color: #1b4332;
`;
