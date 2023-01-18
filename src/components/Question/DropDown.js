/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-shadow */
import React, { useState } from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import SlideTitle from "../UI/SlideTitle";
import CustomTextField from "../UI/FormFields/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  buttonsWrap: {
    marginBottom: theme.spacing(6),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

const DropDown = (props) => {
  const classes = useStyles();
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(false);
  const initialValues = {};

  const handleSubmit = (values, { resetForm }) => {
    if (values.question !== "") {
      setConfirm("Answer saved");
    } else {
      setConfirm("Your answer is empty and has not been saved");
      setError(true);
    }
  };

  return (
    <>
      <SlideTitle title={props.title} variant="h3" component="h1" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <CustomTextField
              classes={{ root: classes.root }}
              InputProps={{ className: classes.input }}
              placeholder="اكتب إجابتك هنا ..."
              type="text"
              name="question"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.question}
              helperText={touched.question ? errors.question : ""}
              error={touched.question && Boolean(errors.question)}
              fullWidth
              multiline
              rows={10}
            />
            {/* <CustomDividor />
            {error && <Message type="error" text={confirm} />}
            {error === false && confirm !== "" && (
              <Message type="success" text={confirm} />
            )} */}
            {/* {confirm !== "" && error === false && (
              <div className={classes.buttonsWrap}>
                <CustomButton
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={props.handleNextSlide}
                >
                  التالى
                </CustomButton>
              </div>
            )} */}
            {/* {confirm === "" && error === false && (
              <div className={classes.buttonsWrap}>
                <CustomButton
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                >
                  إرسال
                </CustomButton>
              </div>
            )} */}
            {/* {confirm !== "" && error === true && (
              <div className={classes.buttonsWrap}>
                <CustomButton
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={handleTryAgain}
                >
                  حاول مرة أخري
                </CustomButton>
                <CustomButton
                  color="secondary"
                  variant="contained"
                  size="large"
                  onClick={props.handleNextSlide}
                >
                  التالى
                </CustomButton>
              </div>
            )} */}
          </form>
        )}
      </Formik>
    </>
  );
};

export default DropDown;
