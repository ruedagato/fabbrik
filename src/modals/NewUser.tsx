import * as React from "react";
import {Dialog, DialogTitle, DialogContent, Button} from "@material-ui/core";
import { FunctionComponent } from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";


interface Props {
  open: boolean;
  onClose: () => void;
}

const useStyle = makeStyles({
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: '10px'
  }
})

const NewUser: FunctionComponent<Props> = (props) => {
  const css = useStyle()
  return <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth="xs">
    <DialogTitle id="simple-dialog-title">Crear nuevo usuario</DialogTitle>
    <DialogContent>
      <form action="" autoComplete="off" className={css.form}>
        <TextField label="Nombre" variant="outlined" name="name" />
        <TextField label="Apellido" variant="outlined" name="lastName" />
        <TextField label="Usuario" variant="outlined" name="user" />
        <Button variant="contained" disableElevation color="primary">
          Crear
        </Button>
      </form>
    </DialogContent>
  </Dialog>
};

export default NewUser;
