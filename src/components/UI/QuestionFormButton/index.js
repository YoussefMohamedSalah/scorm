/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  button: {
    display: 'none',
  },
});

const QuestionFormButton = ({ classes, type, id, onClick }) => (
  <button className={classes.button} type={type} id={id} onClick={onClick} />
);

export default withStyles(styles)(QuestionFormButton);
