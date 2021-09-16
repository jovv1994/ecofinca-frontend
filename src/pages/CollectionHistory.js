import React from 'react';
import {createTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';


const theme = createTheme({
    palette: {
        primary: {
            light: '#ff7961',
            dark: '#ba000d',
            contrastText: '#1B4332',
            main: '#B7E4C7',
        },
        secondary: {
            light: '#ff7961',
            main: '#000',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
            color: theme.palette.secondary.main,
        },
    },
});

function createData(date, amount, owner, option, name, province, canton, parroquia) {    //, protein
    return {
        date,
        amount,
        owner,
        option,
        name,
        province,
        canton,
        parroquia,
    };
}

function Row(props) {
    const {row} = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                    </IconButton>
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.owner}</TableCell>
                <TableCell>
                    <Box display="flex" justifyContent="center" m={1} p={1}>
                        <CheckOutlinedIcon/><ClearOutlinedIcon/>
                    </Box>
                </TableCell>
                {/*<TableCell align="right">{row.protein}</TableCell>*/}
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box width={"30%"} margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                {row.name}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell width={30} align="left"></TableCell>
                                        <TableCell align="left">Ubicacion</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">Provincia</TableCell>
                                        <TableCell align="left">{row.province}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Canton</TableCell>
                                        <TableCell align="left">{row.canton}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Parroquias</TableCell>
                                        <TableCell align="left">{row.parroquia}</TableCell>
                                    </TableRow>
                                </TableBody>
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
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        // protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
    createData('21-12-2021', 15, 'John Doe', 'Eliminar, Ver, Informe, Ubicacion, Dueño finca', 'Finca vegetales', 'Pichincha', 'Quito', 'Cotocollao'),
];


export default function CollectionHistory() {
    return (
        <ThemeProvider theme={theme}>
            <div style={{width: '100%'}}>
                <Box display="flex" justifyContent="center" m={5} p={1} bgcolor="background.paper">
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead bgcolor={theme.palette.primary.main}>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell align="center">Fecha</TableCell>
                                    <TableCell align="center">Cantidad</TableCell>
                                    <TableCell align="center">Dueño de Finca</TableCell>
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
                </Box>
            </div>
        </ThemeProvider>
    );
}
