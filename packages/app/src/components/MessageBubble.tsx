import React from "react";
import { IonItem, IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
import { text } from "ionicons/icons";

interface Props {
  text: string;
  gender: boolean; //true == girl false == boy
  sender: boolean;
}

const alignRight = {
  float: "right",
};

const alignLeft = {
  float: "left",
};
const girlMessage = {
  background: "#ffc1c8",
  borderRadius: "10px",
  marginBottom: "10px",
  margin: "5px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingTop: "5px",
  paddingBottom: "5px",
};

const boyMessage = {
  background: "#8ed6ff",
  borderRadius: "10px",
  marginBottom: "10px",
  margin: "5px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingTop: "5px",
  paddingBottom: "5px",
};

export const MessageBubble: React.FC<Props> = ({ gender, sender, text }) => {
  return (
    <IonContent>
      <IonItem text-wrap lines="none" style={sender ? alignRight : alignLeft}>
        <div style={gender ? girlMessage : boyMessage}>{text}</div>
      </IonItem>
    </IonContent>
  );
};
