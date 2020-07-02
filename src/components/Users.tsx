import * as React from "react";
import Layout from "containers/Layout";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import NewUser from "modals/NewUser";

const useStyle = makeStyles({
  header: {
    display: "flex",
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row-reverse",
  },
  content: {
    padding: 20,
  },
});

const Users = () => {
  const css = useStyle();
  const [open, setOpen] = React.useState(true);
  const handleNewUser = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Layout title="Lista de empleados">
        <div className={css.header}>
          <Button variant="contained" color="secondary" onClick={handleNewUser}>
            Crear Empleado
          </Button>
        </div>
        <Paper className={css.content}>
          <Typography variant="h4">hola</Typography>
        </Paper>
      </Layout>
      <NewUser open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default Users;
