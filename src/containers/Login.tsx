import * as React from "react";
import { useForm } from "react-hook-form";

//ui material components
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// assets
import logo from "assets/img/logo.svg";
import "assets/login.scss";

type FormInputs = {
  user: string,
  password: string
}

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<FormInputs>();
  const onSubmit = (data:FormInputs) => {
    setLoading(true);
    setLoading(false)
  }
  return (
    <div className="login-container">
      <form className="login-form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="Fabbrik" className="login-logo" />
        <TextField
          label="Usuario"
          variant="outlined"
          name="user"
          inputRef={register({ required: "Campo requerido" })}
          error={!!errors.user}
          helperText={errors.user?.message}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          type="password"
          inputRef={register({ required: "Campo requerido" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button variant="contained" color="primary" type="submit" disabled={loading}>
          {loading ? <CircularProgress size={20} /> : "Entrar"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
