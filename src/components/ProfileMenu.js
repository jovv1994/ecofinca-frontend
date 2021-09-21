import * as React from "react";
import { useAuth } from "@/contexts/auth";
import TypeSesion from "@/components/TypeSesion";

export default function ProfileMenu() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useAuth();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <TypeSesion />
    </div>
  );
}
