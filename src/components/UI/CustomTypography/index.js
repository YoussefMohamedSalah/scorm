/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import clsx from 'clsx';
import { Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  font: {
    fontWeight: 300,
  },
  subtitle: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '1.2rem',
  },
  medium: {
    marginBottom: 16,
    fontFamily: 'VodafoneRgBd',
    fontWeight: 'bold',
  },
});

const CustomTypography = ({ classes, subtitle, body, medium, ...props }) => (
  <Typography
    className={clsx(classes.font, {
      [classes.subtitle]: subtitle === 'true',
      [classes.body]: body === 'true',
      [classes.medium]: medium === 'true',
    })}
    {...props}
  />
);

export default withStyles(styles)(CustomTypography);
