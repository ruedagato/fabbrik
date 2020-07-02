import * as React from "react";
import { FunctionComponent } from "react";

// material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Container from '@material-ui/core/Container';

// asset
import logo from 'assets/img/logo-text.svg'
import Menu from "components/Menu";

const drawerWidth = 240;
const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    bar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logoImg: {
      width: '60%'
    },
    content: {
      backgroundColor: theme.palette.background.default,
      flexGrow: 1,
    },
  })
);

type Props = {
  title: string
}

const Layout: FunctionComponent<Props> = (props) => {
  const css = useStyle();
  return (
    <div className={css.root}>
      <AppBar position="fixed" className={css.bar}>
        <Toolbar>
          <Typography variant="h6">{props.title}</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" anchor="left" className={css.drawer} classes={{ paper: css.drawerPaper }}>
        <div className={`${css.toolbar} ${css.logo}`}>
          <img src={logo} alt="Fabbrik" className={css.logoImg} />
        </div>
        <Divider />
        <Menu />
      </Drawer>
      <main className={`${css.content}`}>
        <div className={css.toolbar} />
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};

export default Layout;
