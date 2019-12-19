import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { StoryList } from "../components/StoryList";
import { AddStoryModal } from "../components/AddStoryModal";

export const Story: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonTitle>Story</IonTitle>
            <div style={{ right: "20px", top: "-4px", position: "absolute" }}>
              <AddStoryModal edit={false} />
            </div>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <StoryList />
      </IonContent>
    </IonPage>
  );
};
