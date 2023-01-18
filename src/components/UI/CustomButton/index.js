/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";
import { Button, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  button: {
    borderRadius: 30,
    fontSize: 18,
    textTransform: "capitalize",
    boxShadow: theme.shadows[0],
    "&:hover": {
      background: theme.palette.primary.dark,
      boxShadow: theme.shadows[0],
    },
  },
  secondary: {
    marginRight: theme.spacing(4),
    "&:hover": {
      background: theme.palette.secondary.dark,
      boxShadow: theme.shadows[0],
    },
  },
});

const CustomButton = ({ classes, ...props }) => (
  <Button
    {...props}
    className={clsx(classes.button, {
      [classes.secondary]: props.color === "secondary",
    })}
    component={"button"}
  >
    {props.children}
  </Button>
);

export default withStyles(styles)(CustomButton);
