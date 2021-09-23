import React from "react";
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
        <TableCell align="center">{row.amount}</TableCell>
        <TableCell align="center">{row.nameCenter}</TableCell>
        <TableCell align="center">{row.state}</TableCell>
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

const rows = [
  createData("Frozen yoghurt", 159, "Centro principal Quito", "Pendiente"),
  createData("Frozen yoghurt", 159, "Centro principal Quito", "Pendiente"),
  createData("Frozen yoghurt", 159, "Centro principal Quito", "Pendiente"),
  createData("Frozen yoghurt", 159, "Centro principal Quito", "Pendiente"),
  createData("Frozen yoghurt", 159, "Centro principal Quito", "Pendiente"),
];

export default function FarmHistory() {
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
