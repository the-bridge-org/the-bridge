import React, { Props, useState, useEffect } from "react";
import { IonCard, IonCardContent, IonContent, IonLabel } from "@ionic/react";
interface Item {
  src: string;
  title: string;
  date: string;
  location: string;
}
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
  height: "30%",
  width: " 30%",
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
interface Items {
  items: Item[];
}
export const Story: React.FC<any> = props => {
  const [story, setStory] = useState([
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
  ]);
  const [cover, setCover] = useState({
    src: "http://placekitten.com/g/200/300",
    title: "Cat",
    date: "Sun, Dec 8, 2019",
    location: "Burnaby",
  });
  useEffect(() => {
    setStory(props);
  });
  return (
    <IonCard color="light">
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
  );
};
