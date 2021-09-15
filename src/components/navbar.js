import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography>EcoFinca</StyledTypography>
          <Image
            src="/images/logo.svg" // Route of the image file
            height={25} // Desired size with correct aspect ratio
            width={25} // Desired size with correct aspect ratio
            alt="Logo"
          />
          <Link href="/registro/finca">
            <StyledButton>Registrarme como dueño de finca</StyledButton>
          </Link>
          <StyledButton>Registrarme como centro de acopio</StyledButton>
          <StyledButton>Iniciar Sesión</StyledButton>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

/*const Container = styled.div`
  background: #95d5b2;
`;*/
const StyledAppBar = styled(AppBar)`
  background: #000;
`;

const StyledButton = styled(Button)`
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: #1b4332;
  font-size: 8px;
  margin: 20px;
`;

const StyledTypography = styled(Typography)`
  color: #1b4332;
  font-size: 31px;
  margin-right: 10px;
`;
