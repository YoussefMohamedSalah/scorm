/* eslint-disable no-lonely-if */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { Checkbox, Container, withStyles, Button } from "@material-ui/core";
import Speech from "react-speech";
import useSound from "use-sound";

import Match from "../Question/Match";
import MatchMultiple from "../Question/MatchMultiple";
import TextContent from "../TextContent";
import SlideNavigation from "./Navigation";
import SlideTitle from "../UI/SlideTitle";

import CustomTextField from "../UI/FormFields/TextField";
import CustomRadioButton from "../UI/CustomRadioButton";
import Typography from "../UI/CustomTypography";
import PickAnswer from "../UI/PickAnswer";
import { RadioGroup, FormControlLabel } from "@material-ui/core";
import { Animated } from "react-animated-css";
import isEquivalentObjects from "../../shared/isEquivalentObjects";

const styles = (theme) => ({
  slide: {
    display: "none",
  },
  header: {
    marginTop: theme.spacing(2),
  },
  buttonsWrap: {
    marginBottom: theme.spacing(3),
  },
  active: {
    display: "block",
    minHeight: 700,
    overflowY: "scroll",
  },
});

function Slide({
  classes,
  slide,
  totalSlides,
  handleNextSlide,
  handlePrevSlide,
  currentPage,
  questionnairePoints,
}) {
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [value, setValue] = useState("");
  const [chosen, setChosen] = useState([]);
  const [currentMatch, setCurrentMatch] = useState({});
  const [checks, setChecks] = useState(new Set());
  const [play, { stop }] = useSound(slide.questionAudio);

  let cellWidth = 100 / 3;

  if (slide.questionOptions) cellWidth = 100 / slide.questionOptions.length;

  localStorage.setItem("match", JSON.stringify(currentMatch));

  const updateMatch = (match) => {
    const key = Object.keys(match)[0];
    const value = Object.values(match)[0];

    setCurrentMatch((match) => {
      return Object.assign({}, match, { [key]: value });
    });
  };

  const pickAnswer = (answerText) => {
    if (slide.questionAudio) stop();
    setValue((answer) => {
      if (value.length > 0) return answer;

      return answerText;
    });
  };

  const handleTryAgain = () => {
    if (slide.questionAudio) stop();
    setError(false);
    setConfirm("");
    setValue("");
  };

  const handleChange = (e) => {
    if (slide.questionAudio) stop();
    setValue(e.target.value);
  };

  const handleRadioChange = (event) => {
    if (slide.questionAudio) stop();
    setValue(event.target.value);
    setConfirm("");
    setError(false);
  };

  const handleSubmit = (event) => {
    if (slide.questionType === "CheckBoxes") {
      event.preventDefault();

      let validationChecks = new Set(checks);

      if (validationChecks.size === slide.correctAnswer.length) {
        for (let answer of slide.correctAnswer) {
          validationChecks.delete(answer);
        }

        if (validationChecks.size === 0) {
          setConfirm("Correct Answer");
          setError(false);
        } else {
          setConfirm("Wrong Answer");
          setError(true);
        }
      } else if (validationChecks.size > 0) {
        setConfirm("Wrong Answer");
        setError(true);
      } else {
        setConfirm("Your answer is empty and has not been saved");
        setError(true);
      }
    } else if (slide.questionType === "RadioButtons") {
      event.preventDefault();

      if (value === slide.correctAnswer) {
        setConfirm("Correct Answer");
        setError(false);
      } else {
        setConfirm("Wrong Answer");
        setError(true);
      }
    } else if (slide.questionType === "ImageRadioButtons") {
      event.preventDefault();

      if (value === slide.correctAnswer) {
        setConfirm("Correct Answer");
        setError(false);
      } else {
        setConfirm("Wrong Answer");
        setError(true);
      }
    } else if (slide.questionType === "TrueFalse") {
      event.preventDefault();

      if (value === slide.correctAnswer) {
        setConfirm("Correct Answer");
        setError(false);
      } else {
        setConfirm("Wrong Answer");
        setError(true);
      }
    } else if (slide.questionType === "Questionnaire") {
      event.preventDefault();

      if (value !== "") {
        setConfirm("Answer saved");
      } else {
        setConfirm("Your answer is empty and has not been saved");
        setError(true);
      }
    } else if (slide.questionType === "Audio") {
      stop();
      event.preventDefault();

      if (value === slide.correctAnswer) {
        setConfirm("Correct Answer");
        setError(false);
      } else if (value.length > 0) {
        setConfirm("Wrong Answer");
        setError(true);
      } else {
        setConfirm("Your answer is empty and has not been saved");
        setError(true);
      }
    } else if (slide.questionType === "Match") {
      event.preventDefault();

      const match = isEquivalentObjects(currentMatch, slide.correctMatch);

      if (match) {
        setConfirm("Correct Answer");
        setError(false);
      } else {
        setConfirm("Wrong Answer");
        setError(true);
      }
    } else if (slide.questionType === "MatchMultiple") {
      event.preventDefault();

      const match = isEquivalentObjects(currentMatch, slide.correctMatch);

      if (match) {
        setConfirm("Correct Answer");
        setError(false);
      } else {
        setConfirm("Wrong Answer");
        setError(true);
      }
    } else {
      if (value !== "") {
        setConfirm("Answer saved");
      } else {
        setConfirm("Your answer is empty and has not been saved");
        setError(true);
      }
    }
  };

  return (
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={currentPage === slide.number - 1}
    >
      <div
        className={clsx(classes.slide, {
          [classes.active]: currentPage === slide.number - 1,
        })}
      >
        <Container maxWidth="md">
          <Typography
            variant="body1"
            color="textSecondary"
            gutterBottom
            className={classes.header}
          >
            Page {slide.number} From {totalSlides}
          </Typography>
          {slide.type === "Text" && (
            <div style={{ height: 410, overflowY: "auto" }}>
              {slide.questionnaireResult && <p>{questionnairePoints}</p>}
              <TextContent
                subTitle={slide.content.subTitle}
                title={slide.content.title}
                content={slide.content.content}
                align={slide.align}
                speechText={slide.speechText}
                questionAudios={slide.questionAudios}
              />
            </div>
          )}
          {slide.type === "Question" && slide.questionType === "Text" && (
            <div style={{ height: 360 }}>
              {slide.subTitle && (
                <SlideTitle
                  title={slide.subTitle}
                  variant="h3"
                  component="h2"
                />
              )}
              <Typography variant="h4" body="true" component="h1">
                {slide.title}
              </Typography>
              <CustomTextField
                classes={{ root: classes.root }}
                InputProps={{ className: classes.input }}
                placeholder="Write your answer here..."
                type="text"
                onChange={handleChange}
                value={value}
                fullWidth
                multiline
                rows={10}
              />
            </div>
          )}
          {slide.type === "Question" && slide.questionType === "Audio" && (
            <>
              <SlideTitle
                title={slide.questionTitle}
                variant="h4"
                component="h2"
                align="center"
              />
              {slide.note && (
                <p style={{ marginTop: "-16px", fontSize: "17px" }}>
                  {slide.note}
                </p>
              )}
              {slide.questionSubtitle && (
                <Typography
                  variant="h4"
                  body="true"
                  component="h1"
                  gutterBottom
                >
                  {slide.questionSubtitle}
                </Typography>
              )}
              {slide.questionAudio ? (
                <button
                  className="rs-play"
                  onClick={() => {
                    if (slide.questionAudio) stop();
                    play();
                  }}
                >
                  اضغط علي الزر لسماع السؤال
                </button>
              ) : (
                <>
                  {slide.showQuestionAudio && slide.questionSpeech && (
                    <Speech
                      text={slide.questionSpeech}
                      voice="Google UK English Female"
                      textAsButton
                      displayText={"Click to listen"}
                    />
                  )}
                  {slide.questionText && (
                    <>
                      {slide.showQuestionText && (
                        <Typography
                          variant="h4"
                          body="true"
                          component="h1"
                          gutterBottom
                          style={{ fontWeight: 700 }}
                        >
                          {slide.questionText}
                        </Typography>
                      )}
                    </>
                  )}
                </>
              )}

              <div
                style={{
                  height: slide.showQuestionText ? 236 : 260,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "46%" }}>
                  {slide.questionOptions.map((answer, index) => (
                    <PickAnswer
                      options={slide.questionOptions.length}
                      key={index}
                      text={answer}
                      width={cellWidth}
                      onClick={() => pickAnswer(answer)}
                      value={value}
                      correctAnswer={slide.correctAnswer}
                    />
                  ))}
                </div>
                {slide.questionImage && (
                  <div style={{ width: "46%", textAlign: "center" }}>
                    <img
                      src={slide.questionImage}
                      alt={slide.questionTex}
                      style={{ maxHeight: 288, margin: "0 auto" }}
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {slide.type === "Question" && slide.questionType === "Match" && (
            <div style={{ height: 360 }}>
              {slide.title && (
                <SlideTitle
                  title={slide.title}
                  variant="h4"
                  component="h2"
                  align="center"
                />
              )}
              {slide.subTitle && (
                <Typography
                  variant="h4"
                  body="true"
                  component="h1"
                  gutterBottom
                >
                  {slide.subTitle}
                </Typography>
              )}
              {slide.matchOptions.map((match, index) => (
                <Match
                  key={index}
                  match={match}
                  matchAnswers={slide.matchAnswers}
                  chosen={chosen}
                  currentMatch={currentMatch}
                  updateMatch={(match) => updateMatch(match)}
                  updateChosen={(value) => setChosen(value)}
                />
              ))}
            </div>
          )}
          {slide.type === "Question" &&
            slide.questionType === "MatchMultiple" && (
              <div style={{ height: 360, overflowY: "scroll" }}>
                {slide.title && (
                  <SlideTitle
                    title={slide.title}
                    variant="h4"
                    component="h2"
                    align="center"
                  />
                )}
                {slide.subTitle && (
                  <Typography
                    variant="h4"
                    body="true"
                    component="h1"
                    gutterBottom
                  >
                    {slide.subTitle}
                  </Typography>
                )}
                {slide.mediumTitle && (
                  <Typography
                    medium="true"
                    variant="h4"
                    body="true"
                    component="h1"
                  >
                    {slide.mediumTitle}
                  </Typography>
                )}
                {slide.matchOptions.map((match, index) => (
                  <MatchMultiple
                    key={index}
                    match={match}
                    matchAnswers={slide.matchAnswers}
                    chosen={chosen}
                    currentMatch={currentMatch}
                    updateMatch={(match) => updateMatch(match)}
                    updateChosen={(value) => setChosen(value)}
                  />
                ))}
              </div>
            )}
          {slide.type === "Question" &&
            slide.questionType === "RadioButtons" && (
              <div style={{ height: 260, overflowY: "auto" }}>
                {slide.subTitle && (
                  <SlideTitle
                    title={slide.subTitle}
                    variant="h3"
                    component="h2"
                  />
                )}
                {slide.mediumTitle && (
                  <Typography
                    medium="true"
                    variant="h4"
                    body="true"
                    component="h1"
                  >
                    {slide.mediumTitle}
                  </Typography>
                )}
                <form onSubmit={handleSubmit}>
                  {slide.questionText && (
                    <Typography variant="h4" body="true" component="span">
                      <div style={{ marginTop: "4px" }}>
                        {slide.questionText}
                      </div>
                    </Typography>
                  )}
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <RadioGroup
                      aria-label="question"
                      name="question"
                      value={value}
                      onChange={handleRadioChange}
                    >
                      {slide.questionOptions.map((opt, index) => (
                        <FormControlLabel
                          style={{ margin: 0 }}
                          key={index}
                          value={opt.value}
                          control={<CustomRadioButton />}
                          label={opt.label}
                        />
                      ))}
                    </RadioGroup>
                    {slide.questionImage && (
                      <div style={{ width: "46%", textAlign: "center" }}>
                        <img
                          src={slide.questionImage}
                          alt={slide.questionTex}
                          style={{ maxHeight: 288, margin: "0 auto" }}
                        />
                      </div>
                    )}
                  </div>
                </form>
                <div style={{ marginTop: "15px" }}>
                  {slide.title && (
                    <Typography variant="h4" body="true" component="h1">
                      {slide.title}
                    </Typography>
                  )}
                </div>
              </div>
            )}
          {slide.type === "Question" &&
            slide.questionType === "ImageRadioButtons" && (
              <div style={{ height: 260, overflowY: "auto" }}>
                {slide.subTitle && (
                  <SlideTitle
                    title={slide.subTitle}
                    variant="h3"
                    component="h2"
                  />
                )}
                {slide.mediumTitle && (
                  <Typography
                    medium="true"
                    variant="h4"
                    body="true"
                    component="h1"
                  >
                    {slide.mediumTitle}
                  </Typography>
                )}
                <form onSubmit={handleSubmit}>
                  {slide.questionText && (
                    <Typography variant="h4" body="true" component="span">
                      <div style={{ marginTop: "4px" }}>
                        {slide.questionText}
                      </div>
                    </Typography>
                  )}
                  <RadioGroup
                    aria-label="question"
                    name="question"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    {slide.questionOptions.map((opt, index) => (
                      <FormControlLabel
                        style={{ margin: 0 }}
                        key={index}
                        value={opt.label}
                        control={<CustomRadioButton />}
                        label={
                          <img
                            src={opt.value}
                            alt={opt.label}
                            height={"50px"}
                            style={{ margin: "5px 0" }}
                          />
                        }
                      />
                    ))}
                  </RadioGroup>
                </form>
                <div style={{ marginTop: "15px" }}>
                  {slide.title && (
                    <Typography variant="h4" body="true" component="h1">
                      {slide.title}
                    </Typography>
                  )}
                </div>
              </div>
            )}
          {slide.type === "Question" &&
            slide.questionType === "Questionnaire" && (
              <div style={{ height: 260, overflowY: "auto" }}>
                {slide.subTitle && (
                  <SlideTitle
                    title={slide.subTitle}
                    variant="h3"
                    component="h2"
                  />
                )}
                {slide.mediumTitle && (
                  <Typography
                    medium="true"
                    variant="h4"
                    body="true"
                    component="h1"
                  >
                    {slide.mediumTitle}
                  </Typography>
                )}
                <form onSubmit={handleSubmit}>
                  {slide.questionText && (
                    <Typography variant="h4" body="true" component="span">
                      <div style={{ marginTop: "4px" }}>
                        {slide.questionText}
                      </div>
                    </Typography>
                  )}
                  <RadioGroup
                    aria-label="question"
                    name="question"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    {slide.questionOptions.map((opt, index) => (
                      <FormControlLabel
                        style={{ margin: 0 }}
                        key={index}
                        value={opt.value}
                        control={<CustomRadioButton />}
                        label={opt.label}
                      />
                    ))}
                  </RadioGroup>
                </form>
                <div style={{ marginTop: "15px" }}>
                  {slide.title && (
                    <Typography variant="h4" body="true" component="h1">
                      {slide.title}
                    </Typography>
                  )}
                </div>
              </div>
            )}
          {slide.type === "Question" && slide.questionType === "TrueFalse" && (
            <div style={{ height: 260 }}>
              {slide.subTitle && (
                <SlideTitle
                  title={slide.subTitle}
                  variant="h3"
                  component="h2"
                />
              )}
              {slide.title && (
                <Typography
                  variant="h4"
                  body="true"
                  component="h1"
                  gutterBottom
                >
                  {slide.title}
                </Typography>
              )}
              {slide.mediumTitle && (
                <Typography
                  medium="true"
                  variant="h4"
                  body="true"
                  component="h1"
                >
                  {slide.mediumTitle}
                </Typography>
              )}
              <form onSubmit={handleSubmit}>
                {slide.questionText && (
                  <Typography variant="h4" body="true" component="span">
                    {slide.questionText}
                  </Typography>
                )}
                <RadioGroup
                  aria-label="question"
                  name="question"
                  value={value}
                  onChange={handleRadioChange}
                >
                  {slide.questionOptions.map((opt, index) => (
                    <FormControlLabel
                      style={{ margin: 0 }}
                      key={index}
                      value={opt.value}
                      control={<CustomRadioButton />}
                      label={opt.label}
                    />
                  ))}
                </RadioGroup>
              </form>
              {slide.questionImage && (
                <img
                  src={slide.questionImage}
                  style={{
                    marginRight: "auto",
                    position: "relative",
                    bottom: "40px",
                  }}
                />
              )}
            </div>
          )}
          {slide.type === "Question" && slide.questionType === "CheckBoxes" && (
            <div style={{ minHeight: 300 }}>
              {slide.subTitle && (
                <SlideTitle
                  title={slide.subTitle}
                  variant="h3"
                  component="h2"
                />
              )}
              {slide.questionTitle && (
                <SlideTitle
                  title={slide.questionTitle}
                  variant="h4"
                  component="h2"
                />
              )}
              <form onSubmit={handleSubmit}>
                {slide.questionText && (
                  <Typography variant="h4" body="true" component="span">
                    {slide.questionText}
                  </Typography>
                )}
                <div style={{ marginTop: 16 }}>
                  {slide.questionOptions.map((opt, index) => (
                    <div key={index}>
                      <FormControlLabel
                        style={{ margin: 0 }}
                        value={opt}
                        control={<Checkbox />}
                        label={opt}
                        onChange={(event) => {
                          const newChecks = new Set(checks);

                          newChecks.has(event.target.value)
                            ? newChecks.delete(event.target.value)
                            : newChecks.add(event.target.value);

                          setChecks(newChecks);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </form>
            </div>
          )}
          <SlideNavigation
            type={slide.type}
            correction={slide.correction ? slide.correction : null}
            error={error}
            confirm={confirm}
            handleSubmit={handleSubmit}
            handleNextSlide={() => {
              if (slide.questionAudio) stop();
              handleNextSlide();
            }}
            handleTryAgain={handleTryAgain}
            handlePrevSlide={() => {
              if (slide.questionAudio) stop();
              handlePrevSlide();
            }}
            currentPage={currentPage}
          />
        </Container>
      </div>
    </Animated>
  );
}

export default withStyles(styles)(Slide);
