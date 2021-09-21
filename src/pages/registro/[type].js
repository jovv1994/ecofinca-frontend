import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
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
import { useAuth } from "@/contexts/auth";
import withoutAuth from "@/hocs/withoutAuth";
import Routes from "@/constants/Routes";
import Image from "next/image";

/*-------------------------Validacion de datos--------------------------*/
const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  lastname: yup.string().required("El apellido es obligatorio"),
  email: yup
    .string()
    .email("Ingrese un correo válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(8, "Ingrese al menos 8 caracteres")
    .required("Ingrese una contraseña"),
  // password_confirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Las claves no coinciden")
  //   .required("Confirme su contraseña"),
  address: yup.string().required("La dirección es requerida"),
  organization_type: yup.string().required("Ingrese el nombre de su finca"),
  description: yup
    .string()
    .max(200)
    .required("Una breve descripción de sus productos"),
});
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
const RegisterPage = () => {
  /*Obtener el valor de la ruta dinamica*/
  const router = useRouter();
  const { type } = router.query;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [result, setResult] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const { register } = useAuth();

  const onSubmit = async (formData) => {
    setUserInfo(null);
    setResult("Enviando los datos...");

    try {
      const userData = {
        ...formData,
        role: type === "finca" ? "ROLE_FARM" : "ROLE_COLLECTION_CENTER",
      };

      const response = await register(userData);
      console.log("response", response);
      setUserInfo(response.data);

      setResult("Usuario registrado correctamente");
      reset();
      {
        type === "finca"
          ? router.push(Routes.HOME_FARM)
          : router.push(Routes.HOME_ROLE_COLLECTION_CENTER);
      }
    } catch (e) {
      console.log("e", e.response);
      const { response } = e;
      setResult("Ocurrió un error :(");

      if (response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          // const errorList = Object.values(errors);
          const newErrorList = [];

          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
          console.log("errorList", newErrorList);

          setErrorsList(newErrorList);
        }
      }
    }
  };

  /*-----------------Renderizado del componente----------------------*/
  return (
    <Layout>
      <Container>
        {type === "finca" ? (
          <Div>
            <Title>Registro dueño de finca</Title>
            <Image
              src="/images/bxs-spa.svg" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="Finca"
            />
          </Div>
        ) : (
          <Div>
            <Title>Registro centro de acopio</Title>
            <Image
              src="/images/bxs-building-house.svg" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="Finca"
            />
          </Div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="name"
              control={control}
              defaultValue="nombre 1"
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label="Nombre"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <Controller
              name="lastname"
              control={control}
              defaultValue="apellido 1"
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label="Apellido"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.lastname?.message}</p>
          </div>
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue="preuba1@preuba1.com"
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  type="email"
                  label="Correo electrónico"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue="12345678"
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.password?.message}</p>
          </div>
          {/* <div>
            <Controller
              name="password_confirmation"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  type="password"
                  label="Confirma tu contraseña"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.password_confirmation?.message}</p>
          </div> */}
          <div>
            <Controller
              name="address"
              control={control}
              defaultValue="direccion 1"
              render={({ field }) => (
                <StyledTextField
                  {...field}
                  label="Ingresa tu dirección"
                  variant="outlined"
                  size="small"
                />
              )}
            />
            <p>{errors.address?.message}</p>
          </div>

          {type === "finca" ? (
            <div>
              <div>
                <Controller
                  name="organization_type"
                  control={control}
                  defaultValue="finca 1"
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      label="Nombre de la finca"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.organization_type?.message}</p>
              </div>
              <div>
                <Controller
                  name="description"
                  control={control}
                  defaultValue="description 1"
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      multiline
                      maxRows={6}
                      label="Descripción corta de su finca"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.description?.message}</p>
              </div>

              <div>
                <Controller
                  name="provincia_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese la provincia donde se ubica la finca"
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
                <p>{errors.short_bio?.message}</p>
              </div>

              <div>
                <Controller
                  name="canton_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese el cantón donde se ubica la finca"
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
                <p>{errors.short_bio?.message}</p>
              </div>

              <div>
                <Controller
                  name="parroquia_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese la parroquía donde se ubica la finca"
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
                <p>{errors.short_bio?.message}</p>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <Controller
                  name="organization_type"
                  control={control}
                  defaultValue="finca 1"
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      label="Nombre del centro de acopio"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.organization_type?.message}</p>
              </div>
              <div>
                <Controller
                  name="description"
                  control={control}
                  defaultValue="description 1"
                  render={({ field }) => (
                    <StyledTextField
                      {...field}
                      multiline
                      maxRows={6}
                      label="Descripción corta de su centro de acopio"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>{errors.description?.message}</p>
              </div>

              <div>
                <Controller
                  name="provincia_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese la provincia donde se ubica el centro de acopio"
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
                <p>{errors.short_bio?.message}</p>
              </div>

              <div>
                <Controller
                  name="canton_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese el cantón donde se ubica el centro de acopio"
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
                <p>{errors.short_bio?.message}</p>
              </div>

              <div>
                <Controller
                  name="parroquia_id"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...rest } }) => (
                    <StyledTextField
                      {...rest}
                      select
                      label="Ingrese la parroquía donde se ubica el centro de acopio"
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
                <p>{errors.short_bio?.message}</p>
              </div>
            </div>
          )}

          <p>{result}</p>
          {userInfo && (
            <div>
              <div>Nombre: {userInfo.name}</div>
              <div>Token: {userInfo.token}</div>
            </div>
          )}

          {errorsList.length > 0 && (
            <ul>
              {errorsList.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}

          <Grid>
            <StyledButton type="submit">Registrarme</StyledButton>

            <div>
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" passHref>
                  <StyledMuiLink>Iniciar sesión</StyledMuiLink>
                </Link>
              </p>
            </div>
          </Grid>
        </form>
      </Container>
    </Layout>
  );
};
export default withoutAuth(RegisterPage);
/*----------------------------------------------------------------------*/

/*------------------------Estilos con Styled Component------------------*/
const Container = styled.div`
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
  grid-template-rows: auto auto;
  justify-content: center;
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
