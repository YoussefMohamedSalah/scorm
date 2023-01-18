/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { ListItem, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  listItem: {
    padding: 0,
    marginBottom: theme.spacing(1),
  },
});

const CustomListItem = ({ classes, ...props }) => (
  <ListItem className={classes.listItem} {...props} />
);

export default withStyles(styles)(CustomListItem);
