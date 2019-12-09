import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { StoryList } from "../components/StoryList";

export const Story: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol align-self-start>
              <IonTitle>Story</IonTitle>
            </IonCol>
            <IonCol align-self-center size="8"></IonCol>
            <IonCol align-self-end no-padding>
              <div>
                <IonButton slot="icon-only" fill="clear" expand="block">
                  <IonIcon icon={add} />
                </IonButton>
              </div>
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
