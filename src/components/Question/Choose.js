/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SlideTitle from "../UI/SlideTitle";
import CustomDividor from "../UI/CustomDividor";
import CustomButton from "../UI/CustomButton";
import Message from "../UI/Message";

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

export default function Choose(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [confirm, setConfirm] = React.useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setConfirm("");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === props.correctAnswer) {
      setConfirm("Correct Answer");
      setError(false);
    } else {
      setConfirm("Wrong Answer");
      setError(true);
    }
  };

  const handleTryAgain = () => {
    setError(false);
    setConfirm("");
  };

  return (
    <>
      <SlideTitle title={props.title} variant="h3" component="h1" />
      <form onSubmit={handleSubmit}>
        <FormControl
          component="fieldset"
          error={error}
          className={classes.formControl}
        >
          {props.questionText && (
            <FormLabel component="legend">{props.questionText}</FormLabel>
          )}
          <RadioGroup
            aria-label="question"
            name="question"
            value={value}
            onChange={handleRadioChange}
          >
            {props.questionOptions.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <CustomDividor />
        {error && <Message type="error" text={confirm} />}
        {error === false && confirm !== "" && (
          <Message type="success" text={confirm} />
        )}
        {confirm === "" && error === false && (
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
        )}
        {confirm !== "" && error === false && (
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
        )}
        {confirm !== "" && error === true && (
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
        )}
      </form>
    </>
  );
}
