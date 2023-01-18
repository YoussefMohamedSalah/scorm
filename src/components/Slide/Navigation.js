/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import React from "react";
import { Grid } from "@material-ui/core";
import CustomDividor from "../UI/CustomDividor";
import Message from "../UI/Message";
import CustomButton from "../UI/CustomButton";
import { Animated } from "react-animated-css";

const SlideNavigation = ({
  type,
  error,
  confirm,
  correction,
  handleSubmit,
  handleNextSlide,
  handleTryAgain,
  handlePrevSlide,
  currentPage,
}) => (
  <div className="slide-navigations" dir="rtl">
    <CustomDividor />
    <Animated animationIn="slideInUp" animationOut="fadeOut" isVisible={error}>
      {error && (
        <Message
          show={error}
          type="error"
          text={confirm}
          correction={correction}
        />
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={error === false && confirm !== ""}
    >
      {error === false && confirm !== "" && (
        <Message
          type="success"
          text={confirm}
          show={error === false && confirm !== ""}
          correction={correction}
        />
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={type === "Text"}
    >
      {type === "Text" && (
        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              onClick={handleNextSlide}
            >
              Next
            </CustomButton>
          </Grid>
          {currentPage > 0 && (
            <Grid item>
              <CustomButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handlePrevSlide}
              >
                Previous
              </CustomButton>
            </Grid>
          )}
        </Grid>
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={
        type === "Table" ||
        type === "Table2" ||
        type === "Table3" ||
        type === "Table4" ||
        type === "Table5"
      }
    >
      {(type === "Table" ||
        type === "Table2" ||
        type === "Table3" ||
        type === "Table4" ||
        type === "Table5") && (
        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              onClick={handleNextSlide}
            >
              Next
            </CustomButton>
          </Grid>
          {currentPage > 0 && (
            <Grid item>
              <CustomButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handlePrevSlide}
              >
                Previous
              </CustomButton>
            </Grid>
          )}
        </Grid>
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={type === "Question" && error === false && confirm !== ""}
    >
      {type === "Question" && error === false && confirm !== "" && (
        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              onClick={handleNextSlide}
            >
              Next
            </CustomButton>
          </Grid>
          {currentPage > 0 && (
            <Grid item>
              <CustomButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handlePrevSlide}
              >
                Previous
              </CustomButton>
            </Grid>
          )}
        </Grid>
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={type === "Question" && error === false && confirm === ""}
    >
      {type === "Question" && error === false && confirm === "" && (
        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Send
            </CustomButton>
          </Grid>
          {currentPage > 0 && (
            <Grid item>
              <CustomButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handlePrevSlide}
              >
                Previous
              </CustomButton>
            </Grid>
          )}
        </Grid>
      )}
    </Animated>
    <Animated
      animationIn="slideInUp"
      animationOut="fadeOut"
      isVisible={type === "Question" && error === true}
    >
      {type === "Question" && error === true && (
        <Grid container justifyContent="space-between">
          <Grid item>
            <CustomButton
              color="primary"
              variant="contained"
              size="large"
              onClick={handleTryAgain}
            >
              Try Again
            </CustomButton>
            <CustomButton
              color="secondary"
              variant="contained"
              size="large"
              onClick={handleNextSlide}
            >
              Next
            </CustomButton>
          </Grid>
          {currentPage > 0 && (
            <Grid item>
              <CustomButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handlePrevSlide}
              >
                Previous
              </CustomButton>
            </Grid>
          )}
        </Grid>
      )}
    </Animated>
  </div>
);

export default SlideNavigation;
