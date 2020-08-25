import * as React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { FunctionComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadButton: FunctionComponent<ButtonProps & { load: boolean }> = ({ load, children, ...rest }) => (
  <Button {...rest} disabled={load}>
    {load ? <CircularProgress size={20} /> : children}
  </Button>
);

export default LoadButton;
