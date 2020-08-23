import * as React from "react";
import { Dialog, DialogTitle, DialogContent, TextField } from "@material-ui/core";
import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import LoadButton from "components/LoadButton";

interface Props {
  open: boolean;
  onClose: () => void;
}

const useStyle = makeStyles({
  form: {
    display: "grid",
    gridTemplateColumns: "1fr",
    rowGap: "10px",
    paddingBottom: "20px",
  },
});

type FormInputs = {
  name: string;
  user: string;
  password: string;
};

const NewUser: FunctionComponent<Props> = (props) => {
  const css = useStyle();
  const { register, handleSubmit, errors } = useForm<FormInputs>();
  const [load, setLoad] = React.useState(false);
  const onSubmit = (data: FormInputs) => {
    setLoad(true);
  };
  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth="xs">
      <DialogTitle id="simple-dialog-title">Crear nuevo usuario</DialogTitle>
      <DialogContent>
        <form action="" autoComplete="off" className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            inputRef={register({ required: "Campo requerido" })}
          />
          <TextField
            label="Usuario"
            variant="outlined"
            name="user"
            inputRef={register({ required: "Campo requerido" })}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            name="password"
            inputRef={register({ required: "Campo requerido" })}
          />
          <LoadButton load={load} variant="contained" disableElevation color="primary">
            Crear
          </LoadButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewUser;
