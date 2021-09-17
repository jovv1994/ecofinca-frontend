import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
});

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledPaper square>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<Facebook />} aria-label="facebook" />
        <Tab icon={<Twitter />} aria-label="twitter" />
        <Tab icon={<Instagram />} aria-label="instagram" />
      </Tabs>
    </StyledPaper>
  );
}

const StyledPaper = styled(Paper)`
  width: 100%;
  background: #52b788;
`;
