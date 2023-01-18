/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
import React from "react";

import SlideTitle from "../UI/SlideTitle";
import Typography from "../UI/CustomTypography";

import MinimizeIcon from "@material-ui/icons/Minimize";
import { Button } from "@material-ui/core";
import Speech from "react-speech";

const TextContent = (props) => {
  const handleAudioClick = (event, audio) => {
    event.preventDefault();
    const audioElement = new Audio(audio.audio);
    audioElement.play();
  };

  if (props.align === "left") {
    return (
      <div className="leftcontent">
        <SlideTitle title={props.title} variant="h3" component="h1" />
        {props.subTitle && (
          <SlideTitle
            title={props.subTitle}
            variant="h3"
            component="h2"
            subtitle="true"
          />
        )}
        {props.speechText && (
          <Speech textAsButton={true} text="Click to listen" />
        )}
        {props.questionAudios && (
          <Typography
            component="p"
            style={{
              marginBottom: "10px",
            }}
          >
            Click to listen :{" "}
          </Typography>
        )}

        {props.questionAudios &&
          props.questionAudios.map((audio, index) => (
            <Button
              key={audio.text}
              onClick={(event) => handleAudioClick(event, audio)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "inherit",
              }}
            >
              <Typography style={{ marginRight: "5px" }}>▶︎</Typography>
              <Typography>{audio.text}</Typography>
            </Button>
          ))}
        {props.content &&
          props.content.map((element, key) => {
            if (element.element === "h2") {
              return (
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  key={key}
                  subtitle="true"
                >
                  {element.text}
                </Typography>
              );
            }
            if (element.element === "h3") {
              return (
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h3"
                  key={key}
                  subtitle="true"
                >
                  {element.text}
                </Typography>
              );
            }
            if (element.element === "list") {
              return element.items.map((item, index) => (
                <div className="list-item" key={index}>
                  <MinimizeIcon className="list-item-icon" />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="p"
                    key={index}
                    body="true"
                  >
                    {item}
                  </Typography>
                </div>
              ));
            }
            if (element.element === "listLeft") {
              return element.items.map((item, index) => (
                <div style={{ textAlign: "left" }} key={index}>
                  <div className="list-item-left">
                    <MinimizeIcon className="list-item-icon-left" />
                    {index === 1 ||
                    index === 5 ||
                    index === 9 ||
                    index === 10 ||
                    index === 11 ||
                    index === 12 ? (
                      <a href={item} target="_blank">
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="p"
                          key={index}
                          body="true"
                        >
                          {item}
                        </Typography>
                      </a>
                    ) : (
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="p"
                        key={index}
                        body="true"
                      >
                        {item}
                      </Typography>
                    )}
                  </div>
                </div>
              ));
            }
            if (element.element === "pLeft") {
              return (
                <div style={{ textAlign: "left" }} key={key}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="p"
                    body="true"
                  >
                    {element.text}
                  </Typography>
                </div>
              );
            }
            if (element.element === "p") {
              return (
                <Typography
                  gutterBottom
                  variant="h6"
                  component="p"
                  key={key}
                  body="true"
                  style={element.style}
                >
                  {element.text}
                </Typography>
              );
            }

            if (element.element === "video") {
              return (
                <div
                  className={"videoBox"}
                  style={{ textAlign: "center" }}
                  key={element.text}
                >
                  <video
                    width="80%"
                    height="80%"
                    controlsList="nodownload"
                    style={{ margin: "0 auto", maxHeight: "300px" }}
                    controls
                  >
                    <source src={element.text} />
                    Your browser doesn 't support video tag
                  </video>
                </div>
              );
            }
            if (element.element === "image") {
              return <img src={element.text} key={element.text} />;
            }
            if (element.element === "imageLeft") {
              return (
                <img
                  style={{ marginRight: "auto" }}
                  src={element.text}
                  key={key}
                />
              );
            }

            return null;
          })}
      </div>
    );
  }
  return (
    <>
      <SlideTitle title={props.title} variant="h3" component="h1" />
      {props.subTitle && (
        <SlideTitle
          title={props.subTitle}
          variant="h3"
          component="h2"
          subtitle="true"
        />
      )}
      {props.speechText && (
        <div style={{ marginBottom: "10px" }}>
          <Speech
            textAsButton={true}
            displayText="Click to listen"
            voice="Google UK English Female"
            text={props.speechText}
            rate=".8"
          />
        </div>
      )}
      {props.questionAudios && (
        <Typography
          component="p"
          style={{
            marginBottom: "10px",
          }}
        >
          Click to listen :{" "}
        </Typography>
      )}

      {props.questionAudios &&
        props.questionAudios.map((audio, index) => (
          <Button
            key={audio.text}
            onClick={(event) => handleAudioClick(event, audio)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "inherit",
            }}
          >
            <Typography style={{ marginRight: "5px" }}>▶︎</Typography>
            <Typography>{audio.text}</Typography>
          </Button>
        ))}
      {props.content &&
        props.content.map((element) => {
          if (element.element === "h2") {
            return (
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                key={element.text}
                subtitle="true"
              >
                {element.text}
              </Typography>
            );
          }
          if (element.element === "h3") {
            return (
              <Typography
                gutterBottom
                variant="h5"
                component="h3"
                key={element.text}
                subtitle="true"
              >
                {element.text}
              </Typography>
            );
          }
          if (element.element === "list") {
            return element.items.map((item, index) => (
              <div className="list-item" key={index}>
                <MinimizeIcon className="list-item-icon" />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="p"
                  key={index}
                  body="true"
                >
                  {item}
                </Typography>
              </div>
            ));
          }
          if (element.element === "pLeft") {
            return (
              <div style={{ textAlign: "left" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="p"
                  key={element.text}
                  body="true"
                >
                  {element.text}
                </Typography>
              </div>
            );
          }
          if (element.element === "p") {
            return (
              <Typography
                gutterBottom
                variant="h6"
                component="p"
                key={element.text}
                body="true"
                style={element.style}
              >
                {element.text}
              </Typography>
            );
          }
          if (element.element === "video") {
            return (
              <div
                className={"videoBox"}
                style={{ textAlign: "center" }}
                key={element.text}
              >
                <video
                  width="80%"
                  height="80%"
                  controlsList="nodownload"
                  style={{ margin: "0 auto", maxHeight: "300px" }}
                  controls
                >
                  <source src={element.text} />
                  Your browser doesn 't support video tag
                </video>
              </div>
            );
          }
          if (element.element === "image") {
            return (
              <img
                style={element.style}
                src={element.text}
                key={element.text}
              />
            );
          }
          if (element.element === "imageLeft") {
            return (
              <img
                style={element.style}
                src={element.text}
                key={element.text}
              />
            );
          }
          if (element.element === "imageLeftUp") {
            return (
              <img
                style={{
                  marginRight: "auto",
                  position: "relative",
                  bottom: 250,
                }}
                src={element.text}
                key={element.text}
              />
            );
          }
          return null;
        })}
    </>
  );
};
export default TextContent;
