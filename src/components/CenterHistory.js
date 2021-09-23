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

function createData(date, amount, owner, name, state, province, canton, parroquia) {
    return {
        date,
        amount,
        owner,
        name,
        state,
        province,
        canton,
        parroquia,
    };
}

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{"& > *": {borderBottom: "unset"}}}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                    {row.date}
                </TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.owner}</TableCell>
                <TableCell align="center">{row.state}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{margin: 1}}>
                            <Typography variant="h6" gutterBottom component="div">
                                {row.name}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Ubicacion</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Provincia</TableCell>
                                        <TableCell>{row.province}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Canton</TableCell>
                                        <TableCell>{row.canton}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Parroquia</TableCell>
                                        <TableCell>{row.parroquia}</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        owner: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        province: PropTypes.string.isRequired,
        canton: PropTypes.string.isRequired,
        parroquia: PropTypes.string.isRequired,
    }).isRequired,
};

const rows = [
    createData("21-12-2021", 159, "Prueba nombre", "Finca Quito", "Pendiente", "Pichincha", "Quito","Condado"),
    createData("21-12-2021", 159, "Prueba nombre", "Finca Quito", "Pendiente", "Pichincha", "Quito","Condado"),
    createData("21-12-2021", 159, "Prueba nombre", "Finca Quito", "Pendiente", "Pichincha", "Quito","Condado"),
    createData("21-12-2021", 159, "Prueba nombre", "Finca Quito", "Pendiente", "Pichincha", "Quito","Condado"),
    createData("21-12-2021", 159, "Prueba nombre", "Finca Quito", "Pendiente", "Pichincha", "Quito","Condado"),
];

export default function CenterHistory() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{minHeight: '100vh'}}
        >
            <TableContainer component={Paper}>
                <Typography variant="h3" align="center">
                    Historial de recolecciones
                </Typography>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell align="center">Fecha</TableCell>
                            <TableCell align="center">Cantidad</TableCell>
                            <TableCell align="center">Dueño de finca</TableCell>
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
        </Grid>
    );
}
