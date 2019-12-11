import React, { useState } from "react";
import { IonContent, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { Story } from "./Story";
interface Item {
  src: string;
  title: string;
  date: string;
  location: string;
}
interface Items {
  items: Item[];
}
export const StoryList: React.FC = () => {
  const [storyList] = useState([
    [
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
    ],
    [
      {
        src:
          "https://66.media.tumblr.com/baea33b98e5aa66abd0e5da888d06c44/tumblr_pkw4y0EZTh1uk7v3v_540.jpg",
        title: "Caaaat",
        date: "Sun, Dec 8, 2019",
        location: "Burnaby",
      },
      {
        src: "http://placekitten.com/g/200/300",
        title: "Cat",
        date: "Sun, Dec 8, 2019",
        location: "Burnaby",
      },
    ],
  ]);
  return (
    <IonContent>
      {storyList.map(item => {
        return <Story {...item} />;
      })}
    </IonContent>
  );
};
