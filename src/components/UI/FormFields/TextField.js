/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextField, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  formControl: {
    border: '1px solid rgba(0, 0, 0, .08)',
    color: theme.palette.grey[700],
    fontSize: 16,
    marginTop: '20px !important',
    padding: '6px 10px',
    '&.MuiInput-input': {
      padding: '6px 10px',
    },
    '&:before': {
      display: 'none',
    },
    '&:after': {
      display: 'none',
    },
  },
  lowerCase: {
    '& input': {
      textTransform: 'lowerCase',
    },
  },
  label: {
    color: theme.palette.common.black,
    transform: 'scale(1)',
    fontSize: 16,
  },
});

const CustomTextField = ({ classes, type, ...props }) => {
  const inputClasses = [classes.formControl];

  if (type === 'email') inputClasses.push(classes.lowerCase);

  return (
    <TextField
      className={classes.root}
      InputProps={{ className: inputClasses.join(' ') }}
      InputLabelProps={{ shrink: true, className: classes.label }}
      {...props}
    />
  );
};

export default withStyles(styles)(CustomTextField);
