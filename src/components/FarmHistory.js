import React, {useEffect, useState} from "react";
import {styled} from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Delivery from "@/api/delivery";
import Provincia from "@/api/provincias";

const Grid = styled(MuiGrid)(({theme}) => ({
  width: '100%',
}));

function createData(description, amount, nameCenter, state) {
  return {
    description,
    amount,
    nameCenter,
    state,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">{row.quantity}</TableCell>
        <TableCell align="center">{row.delivery_manager}</TableCell>
        <TableCell style={row.state === "Aceptado" ? { color: "green"} : row.state === "Rechazado" ? {color: "red"}:  {color: "black"}} align="center">{row.state}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    nameCenter: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};



export default function FarmHistory() {
  const [deliveries, setDeliveries] = useState([]);

  const rows = deliveries;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Delivery.allPost();
        console.log("response Delivery", response.data);
        setDeliveries(response.data);
      } catch (e) {
        console.log("Error Delivery data", e);
      }
    };

    getData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" align="center">
        Historial de entregas
      </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Acopio</TableCell>
            <TableCell align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
