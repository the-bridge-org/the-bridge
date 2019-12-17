import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import { Link } from "react-router-dom";

const albumStyle: object = {
  height: "50%",
  width: " 50%",
  display: "block",
  margin: "auto",
};

const imgStyle: object = {
  width: "100%",
};
const textStyle: object = {
  color: "#FFFFFF",
  textShadow: "2px 2px 2px #aaa",
};
const titleStyle: object = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",
};

const dateStyle: object = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const locationStyle: object = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

interface storyStyleType {
  imgStyle: object;
  textStyle: object;
  dateStyle: object;
  locationStyle: object;
  titleStyle: object;
  albumStyle: object;
}

export const storyStyle: storyStyleType = {
  albumStyle,
  imgStyle,
  textStyle,
  titleStyle,
  dateStyle,
  locationStyle,
};

export const Story: React.FC<any> = props => {
  const cover = props[0];

  return (
    <Link to="/editStory">
      <IonCard color="light" button>
        <IonCardContent>
          <div className="thumbnail" style={albumStyle}>
            <img src={cover.src} style={imgStyle} />

            <div style={textStyle}>
              <div style={dateStyle}>
                <p>{cover.date}</p>
              </div>
              <div style={titleStyle}>
                <b>{cover.title}</b>
              </div>
              <div style={locationStyle}>
                <p>{cover.location}</p>
              </div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </Link>
  );
};
