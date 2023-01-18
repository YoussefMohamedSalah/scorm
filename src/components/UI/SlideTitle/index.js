/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  title: {
    fontSize: '1.8rem',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      fontFamily: 'VodafoneRgBd',
      fontWeight: 'bold',
    },
  },
  white: {
    color: 'white',
  },
  subtitle: {
    fontSize: '1.6rem',
  },
});

const SlideTitle = ({ classes, title, textColor, subtitle, ...props }) => (
  <Typography
    className={clsx(classes.title, {
      [classes.white]: textColor === 'white',
      [classes.subtitle]: subtitle === 'true',
    })}
    {...props}
  >
    {title}
  </Typography>
);

export default withStyles(styles)(SlideTitle);
