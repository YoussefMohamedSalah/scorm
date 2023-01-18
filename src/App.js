/* eslint-disable */
import React, { useEffect, useState } from "react";
import { create } from "jss";
import rtl from "jss-rtl";

import {
  StylesProvider,
  jssPreset,
  withStyles,
} from "@material-ui/core/styles";

import Scorm from "./scorm/scorm-pipeworks";
import Slide from "./components/Slide";
import slides from "./shared/data.js";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const styles = (theme) => ({
  header: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 120,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    background: "white",
  },
  imageWrap: {
    width: 120,
    height: 120,
    padding: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    Scorm.SCORM.version = "1.2";
    Scorm.SCORM.init();
  }, []);

  const handleNextSlide = () => {
    setCurrentPage(currentPage + 1);
    const video = Array.from(document.querySelectorAll("video"));
    for (let i = 0; i < video.length; i++) {
      video[i].pause();
    }
  };

  const handlePrevSlide = () => {
    setCurrentPage(currentPage - 1);
    const video = Array.from(document.querySelectorAll("video"));
    for (let i = 0; i < video.length; i++) {
      video[i].pause();
    }
  };

  if (currentPage >= 0) {
    return (
      // <StylesProvider jss={jss}>
      <div className="app">
        {slides.map((slide, index) => {
          if (currentPage === slides.length) {
            Scorm.SCORM.quit();
          }
          return (
            <Slide
              key={index}
              slide={slide}
              totalSlides={slides.length}
              handleNextSlide={handleNextSlide}
              handlePrevSlide={handlePrevSlide}
              currentPage={currentPage}
            />
          );
        })}
      </div>
      // </StylesProvider>
    );
  }

  return (
    // <StylesProvider jss={jss}>
    <p>Slide content is not set</p>
    // </StylesProvider>
  );
}

export default withStyles(styles)(App);
