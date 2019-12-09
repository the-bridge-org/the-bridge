import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

export const Story: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Story</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </IonPage>
  );
};
