import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "../../styles/Deliveries.module.css";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const schema = yup.object().shape({
  description: yup.string().required(),
  quantity: yup.string().required(),
  image: yup.mixed().required(),
  latitude: yup.string().required(),
  longitude: yup.string().required(),
});

const NewDeliveryPage = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData) => {};

  return (
    <Grid container justifyContent="center" className={styles.mainContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <Typography variant="h6">Descripción</Typography>
          </Grid>
          <Grid item>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  id="standard-multiline-flexible"
                  multiline
                  maxRows={4}
                  placeholder="Agrega una breve descripción de tu entrega"
                  // value={value}
                  // onChange={handleChange}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <Typography variant="h6">Cantidad</Typography>
          </Grid>
          <Grid item>
            <Controller
              name="quantity"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  className={styles.quantityField}
                  id="standard-number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container className={styles.formGridItem}>
          <input type="file" id="image" name="image" />
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <Typography variant="h6">Provincia</Typography>
          </Grid>
          <Grid item>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              // value={age}
              // onChange={handleChange}
              // className={classes.selectEmpty}
            >
              <MenuItem value="Pichincha">Pichinca</MenuItem>
              <MenuItem value="Orellana">Orellana</MenuItem>
              <MenuItem value="Pataza">Pataza</MenuItem>
              <MenuItem value="Imbabura">Imbabura</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <Typography variant="h6">Cantón</Typography>
          </Grid>
          <Grid item>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              // value={age}
              // onChange={handleChange}
              // className={classes.selectEmpty}
            >
              <MenuItem value="Quito">Quito</MenuItem>
              <MenuItem value="El Quinche">El Quinche</MenuItem>
              <MenuItem value="San Miguel de los Banccos">
                San Miguel de los Banccos
              </MenuItem>
              <MenuItem value="Pedro Mokncayo">Pedro Mokncayo</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <Typography variant="h6">Parroquia</Typography>
          </Grid>
          <Grid item>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              // value={age}
              // onChange={handleChange}
              // className={classes.selectEmpty}
            >
              <MenuItem value="Guamani">Guamani</MenuItem>
              <MenuItem value="Quitumbe">Quitumbe</MenuItem>
              <MenuItem value="San Lorenzo">San Lorenzo</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={10}
          alignItems="center"
          className={styles.formGridItem}
        >
          <Grid item>
            <CreateButton variant="contained" color="primary" size="small">
              Publicar entregas
            </CreateButton>
          </Grid>
          <Grid item>
            <CancelButton variant="contained" color="primary" size="small">
              Cancelar publicación
            </CancelButton>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default NewDeliveryPage;

const CreateButton = styled(Button)`
  background-color: #40916c;
`;
const CancelButton = styled(Button)`
  background-color: #1b4332;
`;
