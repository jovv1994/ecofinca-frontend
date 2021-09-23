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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Delivery from "@/api/delivery";

const Grid = styled(MuiGrid)(({theme}) => ({
    width: '100%',
}));

//
// Row.propTypes = {
//     row: PropTypes.shape({
//         date: PropTypes.string.isRequired,
//         amount: PropTypes.number.isRequired,
//         owner: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         state: PropTypes.string.isRequired,
//         province: PropTypes.string.isRequired,
//         canton: PropTypes.string.isRequired,
//         parroquia: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default function CenterHistory() {
    const [deliveries, setDeliveries] = useState([]);

    const rows = deliveries;

    useEffect(() => {

        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await Delivery.allPost();
            console.log("response Delivery", response.data);
            setDeliveries(response.data);
        } catch (e) {
            console.log("Error Delivery data", e);
        }
    };

    const update = async (id, state) => {
        try {
            const response = await Delivery.updateAcopio(id, state);
            console.log("Update Delivery", response.data);
        } catch (e) {
            console.log("Error Update Delivery data", e);
        }

        getData();
    }

    const Row = (props) => {
        const {row} = props;
        const [open, setOpen] = React.useState(false);

        let colorCheck;
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
                        {row.created_at}
                    </TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.delivery_creator}</TableCell>
                    <TableCell align="center">
                        <CheckIcon style={row.state === "Aceptado" ? { fill: "green"} : {fill: "black"}} onClick={() => update(row.id, "Aceptado")}/>
                        <CloseIcon style={row.state === "Rechazado" ? { fill: "red"} : {fill: "black"}} onClick={() => update(row.id, "Rechazado")}/>
                    </TableCell>
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
                                            <TableCell>Valor</TableCell>
                                            <TableCell>Detalle</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Descripcion</TableCell>
                                            <TableCell>{row.description}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Provincia</TableCell>
                                            <TableCell>{row.provincia}</TableCell>
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
                            <Row key={row.name} row={row}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
