import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import User from "../api/user";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Link as MuiLink, TextField } from "@material-ui/core";
import Link from "next/link";

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
  farm_name: yup.string().required("Este campo obligatorio"),
  farm_description: yup.string().max(200).required("Este campo obligatorio"),
});

const RegisterPage = () => {
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

  const onSubmit = async (formData) => {
    setUserInfo(null);
    setResult("Enviando los datos...");

    try {
      const userData = {
        ...formData,
        role: "ROLE_USER",
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

  return (
    <div>
      <div>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <Link href="/inicio-sesion" passHref>
            <MuiLink>Iniciar sesión</MuiLink>
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
            name="farm_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
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
            name="farm_description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
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
        <Button type="submit" color="primary" variant="contained">
          Registrarme
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
