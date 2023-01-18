/* eslint-disable import/order */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "../CustomTypography";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  message: {
    display: "flex",
    alignContent: "center",
    backgroundColor: "rgba(54, 62, 78, 0.02)",
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0),
  },
  icon: {
    borderRadius: "50%",
    minWidth: 36,
    height: 36,
    color: "white",
    marginLeft: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  success: {
    background: "rgb(47, 189, 151)",
  },
  error: {
    background: "red",
  },
}));

export default function Message({ type, text, correction }) {
  const classes = useStyles();

  return type === "success" ? (
    <div className={classes.message}>
      <div className={[classes.icon, classes.success].join(" ")}>
        <DoneIcon />
      </div>
      <div>
        <Typography variant="h4" body="true" component="p">
          {text}
        </Typography>
        {correction && (
          <Typography variant="body2" body="true" component="p">
            {correction}
          </Typography>
        )}
      </div>
    </div>
  ) : (
    <div className={classes.message}>
      <div className={[classes.icon, classes.error].join(" ")}>
        <CloseIcon />
      </div>
      <div>
        <Typography variant="h4" body="true" component="p">
          {text}
        </Typography>
        {correction && (
          <Typography variant="body2" body="true" component="p">
            {correction}
          </Typography>
        )}
      </div>
    </div>
  );
}
