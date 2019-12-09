import React from "react";
import { IonCard, IonCardContent, IonContent, IonLabel } from "@ionic/react";
type Item = {
  src: string;
  title: string;
  date: string;
  location: string;
};
const items: Item[] = [
  {
    src: "http://placekitten.com/g/200/300",
    title: "Cat",
    date: "Sun, Dec 8, 2019",
    location: "Burnaby",
  },
  {
    src: "http://placekitten.com/g/200/300",
    title: "Cat",
    date: "Sun, Dec 8, 2019",
    location: "Burnaby",
  },
];

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

export const Story: React.FC = () => {
  const cover = items[0];

  return (
    <IonContent>
      <IonCard>
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
    </IonContent>
  );
};
