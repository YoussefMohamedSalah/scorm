/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import React, { useState } from 'react';
import clsx from 'clsx';
import { Container, Grid, Typography, withStyles } from '@material-ui/core';

import arrowImage from '../../images/arrow.jpg';

import SlideTitle from '../UI/SlideTitle';
import CustomDividor from '../UI/CustomDividor';
import CustomPaper from '../UI/CustomPaper';

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const styles = (theme) => ({
  featured: {
    height: '100%',
    overflowY: 'auto',
    backgroundColor: 'rgba(52, 73, 94, .5)',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
    },
  },
  header: {
    backgroundColor: 'white',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  footer: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 0),
    },
  },
  text: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 3),
    },
  },
  button: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: theme.spacing(2),
  },
});

function Home({ classes, handleNextSlide }) {
  const [buttonText, setButtonText] = useState('لم يمر بعد');
  const handleMouseOut = () => {
    setButtonText('لم يمر بعد');
  };

  const handleMouseOver = () => {
    setButtonText('بداية');
  };

  return (
    <>
      <div className={classes.featured}>
        <Container maxWidth="md">
          <Grid
            className={classes.header}
            container
            alignItems="center"
            justify="space-between"
          ></Grid>
          <SlideTitle title="التعلم النشط" textColor="white" variant="h1" />
          <CustomDividor />
          <SlideTitle
            title="الوحدة السادسة "
            textColor="white"
            variant="h1"
            align="center"
          />
        </Container>
      </div>
      <div className={classes.footer}>
        <Container
          maxWidth="md"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <CustomPaper>
            <Grid container>
              <Grid item>
                <img className={classes.img} alt="complex" src={arrowImage} />
              </Grid>
              <Grid item xs={12} sm container alignItems="center">
                <Grid item xs={12} className={classes.text}>
                  <Typography variant="h3">مجتمـع التعلـم​</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    onClick={handleNextSlide}
                    variant="h5"
                    component="p"
                    align="right"
                    color="textSecondary"
                    className={clsx(classes.text, {
                      [classes.button]: buttonText === 'بداية',
                    })}
                  >
                    {buttonText}
                    {buttonText === 'بداية' && (
                      <KeyboardBackspaceIcon className={classes.icon} />
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CustomPaper>
        </Container>
      </div>
    </>
  );
}

export default withStyles(styles)(Home);
