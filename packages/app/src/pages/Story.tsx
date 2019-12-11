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
  IonModal,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
import { StoryList } from "../components/StoryList";
const modalStyle = {
  width: "15%",
  right: "15px",
  bottom: "15px",
  position: "absolute",
};
const buttonStyle = { width: "100%", height: "1000%" };
export const Story: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol align-self-start>
              <IonTitle>Story</IonTitle>
            </IonCol>
            <IonCol align-self-center size="7"></IonCol>
            <IonCol align-self-end no-padding>
              <div>
                <IonModal showBackdrop isOpen={showModal}>
                  <IonRow>
                    <IonCol>
                      <IonButton color="medium" style={buttonStyle}>
                        Camera
                      </IonButton>
                    </IonCol>
                    <IonCol>
                      <IonButton color="medium" style={buttonStyle}>
                        Photo
                      </IonButton>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonButton color="medium" style={buttonStyle}>
                        Video
                      </IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                  </IonRow>
                  <IonRow>
                    <IonButton
                      fill="clear"
                      onClick={() => setShowModal(false)}
                      style={modalStyle}
                    >
                      cancel
                    </IonButton>
                  </IonRow>
                </IonModal>
                <IonButton
                  fill="clear"
                  slot="icon-only"
                  onClick={() => setShowModal(true)}
                >
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
