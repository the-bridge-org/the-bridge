import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";
import { Redirect } from "react-router-dom";

const albumStyle: object = {
  height: "50%",
  width: " 50%",
  display: "block",
  margin: "auto",
};

const imgStyle: object = {
  width: "100%",
};

export const StoryItem: React.FC<any> = props => {
  const cover = props;

  return (
    <IonCard
      color="light"
      button
      onClick={() => {
        return <Redirect to="/story/id" />;
      }}
    >
      <IonCardContent>
        <div className="thumbnail" style={albumStyle}>
          <img src={cover.src} style={imgStyle} />
        </div>
      </IonCardContent>
    </IonCard>
  );
};
