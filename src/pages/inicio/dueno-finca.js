import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TableContainer from "@material-ui/core/TableContainer";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const OwnerHomePage = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "dd/mm/aa",
      "3 costales",
      "Cento de acopio ABC",
      "pendiente",
      4.0
    ),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid container direction="column" spacing={4} justifyContent="center">
      <Grid item>
        <Grid container direction="column" spacing={2} justifyContent="center">
          <Grid item justifyContent="center">
            <Typography>Historial de Entregas</Typography>
          </Grid>
          <Grid item>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Cantidad</TableCell>
                    <TableCell align="center">Lugar</TableCell>
                    <TableCell align="center">Seguro</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row" align="center">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.calories}</TableCell>
                      <TableCell align="center">{row.fat}</TableCell>
                      <TableCell align="center">{row.carbs}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                Conoce tips para manejar de mejor manera los desechos de tus
                agroquímicos
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                Informate sobre los reglamentos y leyes que rigen en tu gobierno
                para el cuidado ambiental
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardContent>
                Aprende maneras sustentables de cuidar tus fincas sin dañar el
                suelo y el medio ambiente
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OwnerHomePage;
