import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Logout from "@/components/Logout";
import { useAuth } from "@/contexts/auth";

export default function TypeSesion() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const { role } = router.query;
  const { user } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (role === "finca") {
    return (
      <div>
        <Typography>Finca </Typography>
        {user.organization}
        <Link href="/entrega">
          <StyledButton>Realizar una entrega</StyledButton>
        </Link>
        <Typography>Bienvenido </Typography>
        {user.name}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
        </Menu>
        <Logout />
      </div>
    );
  }

  return (
    <div>
      <Typography>Centro de acopio </Typography>
      {user.organization}
      <Typography>Bienvenido </Typography>
      {user.name}
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
      </Menu>
      <Logout />
    </div>
  );
}

const StyledButton = styled(Button)`
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: #1b4332;
  font-size: 8px;
  margin: 10px;
`;
