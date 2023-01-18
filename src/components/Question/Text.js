/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";

import SlideTitle from "../UI/SlideTitle";
import CustomTextField from "../UI/FormFields/TextField";
import SubmitButton from "../UI/QuestionFormButton";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  input: {
    border: "1px solid rgba(0, 0, 0, .08)",
    background: "transparent",
    color: "black",
    marginTop: "0px !important",
    "& .MuiInput-input": {
      padding: "6px 10px",
    },
    "&:before": {
      display: "none",
    },
    "&:after": {
      display: "none",
    },
  },
  buttonsWrap: {
    marginBottom: theme.spacing(6),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Match(props) {
  const classes = useStyles();
  const initialValues = { question: "" };

  const handleSubmit = (values, { resetForm }) => {
    if (values.question !== "") {
      props.setConfirm("Answer saved");
    } else {
      props.setConfirm("Your answer is empty and has not been saved");
      props.setError(true);
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
            <SubmitButton id="text-submit" type="submit" />
          </form>
        )}
      </Formik>
    </>
  );
}
