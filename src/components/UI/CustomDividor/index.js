/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Divider, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    height: 3,
  },
});

const CustomDividor = ({ classes, ...props }) => (
  <Divider className={classes.divider} {...props} />
);

export default withStyles(styles)(CustomDividor);
