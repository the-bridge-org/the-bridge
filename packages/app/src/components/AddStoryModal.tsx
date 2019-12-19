import {
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonModal,
  IonContent,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React, { useState } from "react";
const modalStyle = {
  width: "15%",
  right: "15px",
  bottom: "15px",
  position: "absolute",
};
const buttonStyle = { width: "100%", height: "1000%" };
interface propsType {
  edit: boolean;
  date?: string;
}
export const AddStoryModal: React.FC<propsType> = props => {
  const [showModal, setShowModal] = useState(false);
  const { edit } = props;
  return (
    <div>
      <IonModal showBackdrop isOpen={showModal}>
        {edit && (
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <p>{props.date}</p>
            <p>Add to this date</p>
          </div>
        )}
        <IonContent>
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
        </IonContent>
        <IonContent>
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
        </IonContent>
      </IonModal>

      <IonButton
        fill="clear"
        slot="icon-only"
        onClick={() => setShowModal(true)}
      >
        <IonIcon icon={add} />
      </IonButton>
    </div>
  );
};
