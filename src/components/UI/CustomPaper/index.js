/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  paper: {
    boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 10px 0px;',
  },
});

const CustomPaper = ({ classes, children }) => (
  <div className={classes.paper}>{children}</div>
);

export default withStyles(styles)(CustomPaper);
