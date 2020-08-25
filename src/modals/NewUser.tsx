import * as React from "react";
import { Dialog, DialogTitle, DialogContent, TextField } from "@material-ui/core";
import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import LoadButton from "components/LoadButton";
import { userNameRef } from "utils/firebase-references";
import * as firebase from "firebase/app";
import "firebase/functions";

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
  const [nameError, setNameError] = React.useState(false);
  const [userNames, setUserNames] = React.useState([]);
  const [error, setError] = React.useState("");

  const onSubmit = async (data: FormInputs) => {
    setLoad(true);
    try {
      await firebase.functions().httpsCallable("createUser")({
        user: data.user,
        password: data.password,
        company: "molgivar",
        name: data.name,
      });
      props.onClose();
    } catch ({ message, code }) {
      setError(message);
    } finally {
      setLoad(false);
    }
  };
  const ref = userNameRef("molgivar");
  React.useEffect(() => {
    ref.on("value", (snap) => setUserNames(Object.keys(snap.val())));
    return () => ref.off();
  }, [setUserNames]);
  const closeModal = () => {
    props.onClose();
  };
  const changeUser = (event: any) => {
    if (userNames.includes(event.target.value)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  return (
    <Dialog open={props.open} onClose={closeModal} fullWidth={true} maxWidth="xs">
      <DialogTitle id="simple-dialog-title">Crear nuevo usuario</DialogTitle>
      <DialogContent>
        <form action="" autoComplete="off" className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            inputRef={register({ required: "Campo requerido" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="Usuario"
            variant="outlined"
            name="user"
            onChange={changeUser}
            inputRef={register({ required: "Campo requerido" })}
            error={nameError || !!errors.user}
            helperText={nameError ? "Usuario ya exciste" : errors.user?.message}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            name="password"
            inputRef={register({ required: "Campo requerido" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <LoadButton load={load} variant="contained" disableElevation color="primary" type="submit">
            Crear
          </LoadButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewUser;
