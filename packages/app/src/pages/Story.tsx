import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import { StoryList } from "../components/StoryList";
import { AddStoryModal } from "../components/AddStoryModal";

export const Story: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol align-self-start>
              <IonTitle>Story</IonTitle>
            </IonCol>
            <IonCol align-self-center size="6"></IonCol>
            <IonCol align-self-end no-padding>
              <AddStoryModal edit={false} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <StoryList />
      </IonContent>
    </IonPage>
  );
};
