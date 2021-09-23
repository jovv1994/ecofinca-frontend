import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Link as MuiLink,
  TextField,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "@/components/Layout";
import Image from "next/image";
import Delivery from "@/api/delivery";
import withAuth from "@/hocs/withAuth";

/*-------------------------Validacion de datos--------------------------*/
const schema = yup.object().shape({
  description: yup.string().max(200).required("La descripción es obligatoria"),
  quantity: yup.string().required("Ingrese la cantidad de botellas"),
  image: yup.mixed().required("La imagen es obligatoria"),
  provincia: yup.string().required("Elija la provincia"),
  canton: yup.string().required("Elija el cantón"),
  parroquia: yup.string().required("Elija la parroquia"),
  for_user_id: yup
    .string()
    .required("Debe elegir un centro de acopio para su entrega"),
});
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/

const DeliveryPage = () => {
  /*Obtener el valor de la ruta dinamica*/
  const router = useRouter();
  const { type } = router.query;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
    register,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    console.log("values", values);

    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("quantity", values.quantity);
    formData.append("image", values.image[0]);
    formData.append("provincia", values.provincia);
    formData.append("canton", values.canton);
    formData.append("parroquia", values.parroquia);
    formData.append("for_user_id", values.for_user_id);

    const response = await Delivery.create(formData);

    console.log("response", response);
    reset();
  };

  /*-----------------Renderizado del componente----------------------*/
  return (
    <Layout>
      <Container>
        <Div>
          <Title>Formulario de entrega</Title>
          <Image
            src="/images/bxs-notepad.svg" // Route of the image file
            height={50} // Desired size with correct aspect ratio
            width={50} // Desired size with correct aspect ratio
            alt="Finca"
          />
        </Div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label="Descripción de las botellas"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.description?.message}</p>
          </div>

          <div>
            <Controller
              name="quantity"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label="Número de botellas"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.quantity?.message}</p>
          </div>

          <div>
            <input type="file" id="image" name="image" {...register("image")} />
            <p>{errors.title?.message}</p>
          </div>

          <div>
            <Controller
              name="provincia"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  select
                  label="Ingrese la provincia"
                  inputRef={ref}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  {[
                    {
                      label: "Pichincha",
                      value: 1,
                    },
                    {
                      label: "Guayas",
                      value: 2,
                    },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              )}
            />
            <p>{errors.provincia?.message}</p>
          </div>

          <div>
            <Controller
              name="canton"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  select
                  label="Ingrese el cantón"
                  inputRef={ref}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  {[
                    {
                      label: "Quito",
                      value: 1,
                    },
                    {
                      label: "El Oro",
                      value: 2,
                    },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              )}
            />
            <p>{errors.canton?.message}</p>
          </div>

          <div>
            <Controller
              name="parroquia"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  select
                  label="Ingrese la parroquía"
                  inputRef={ref}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  {[
                    {
                      label: "Quito",
                      value: 1,
                    },
                    {
                      label: "El Oro",
                      value: 2,
                    },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              )}
            />
            <p>{errors.parroquia?.message}</p>
          </div>

          <div>
            <Controller
              name="for_user_id"
              control={control}
              defaultValue=""
              render={({ field: { ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  select
                  label="Elija el centro de acopio"
                  inputRef={ref}
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                >
                  {[
                    {
                      label: "Acopio ABC",
                      value: 1,
                    },
                    {
                      label: "Acopio XYZ",
                      value: 2,
                    },
                  ].map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              )}
            />
            <p>{errors.for_user_id?.message}</p>
          </div>

          <Grid>
            <StyledButton type="submit">Publicar Entrega</StyledButton>
            <Link href="/home/finca">
              <StyledButton>Cancelar</StyledButton>
            </Link>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
};

export default withAuth(DeliveryPage);

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  background: #74c69d;
  padding: 15px;
  width: 50%;
  margin: auto;
`;

const Div = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #1b4332;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  color: #000000;
`;

const StyledTextField = styled(TextField)`
  background: #ffffff;
  border-radius: 10px;
  color: #000000;
  width: 100%;
`;

const StyledMuiLink = styled(MuiLink)`
  color: #000000;
`;
