import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { ChatHistory } from "../components/ChatHistory";
import { ChatInput } from "../components/ChatInput";

export const Chat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ChatHistory />
      </IonContent>
      <ChatInput />
    </IonPage>
  );
};
