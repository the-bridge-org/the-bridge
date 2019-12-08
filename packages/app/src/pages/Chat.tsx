import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Avatar } from "../components/Avatar";
import { MessageBubble } from "../components/MessageBubble";

export const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Avatar></Avatar>
      <MessageBubble text="hi" gender={false} sender={true}></MessageBubble>
      <Avatar></Avatar>
      <MessageBubble
        text="hi, I am Sharon"
        gender={true}
        sender={false}
      ></MessageBubble>
      <IonContent></IonContent>
    </IonPage>
  );
};
