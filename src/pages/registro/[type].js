import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import User from "@/api/user";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Link as MuiLink, TextField } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

/*-------------------------Validacion de datos--------------------------*/
const schema = yup.object().shape({
  name: yup.string().required("Este campo es obligatorio"),
  email: yup
    .string()
    .email("Ingrese un correo válido")
    .required("Este campo obligatorio"),
  password: yup
    .string()
    .min(8, "Ingrese al menos 8 caracteres")
    .required("Este campo obligatorio"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las claves no coinciden")
    .required("Este campo obligatorio"),
  organization: yup.string().required("Este campo obligatorio"),
  description: yup.string().max(200).required("Este campo obligatorio"),
});
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
const RegisterPage = () => {
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
  //const { register } = useAuth();

  // registro como finca -> /registro/finca
  // registro como centro de acopia -> /registro/centro
  const onSubmit = async (formData) => {
    setUserInfo(null);
    setResult("Enviando los datos...");

    try {
      const userData = {
        ...formData,
        role: type === "finca" ? "ROLE_FARM" : "ROLE_ACOPIO",
      };
      const response = await User.register(userData);
      console.log("response", response);
      setUserInfo(response.data);

      setResult("Usuario registrado correctamente");
      reset();
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
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
            name="email"
            control={control}
            defaultValue=""
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
            defaultValue=""
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
        <div>
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
        </div>
        <div>
          <Controller
            name="organization"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <StyledTextField
                {...field}
                label="Nombre de la finca"
                variant="outlined"
                size="small"
              />
            )}
          />
          <p>{errors.editorial?.message}</p>
        </div>
        <div>
          <Controller
            name="description"
            control={control}
            defaultValue=""
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
          <p>{errors.short_bio?.message}</p>
        </div>

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
        <StyledButton type="submit">Registrarme</StyledButton>

        <div>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/inicio-sesion" passHref>
              <MuiLink>Iniciar sesión</MuiLink>
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
};
export default RegisterPage;
/*----------------------------------------------------------------------*/

/*------------------------Estilos con Styled Component------------------*/
const Container = styled.div`
  background: #74c69d;
  padding: 15px;
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
`;
