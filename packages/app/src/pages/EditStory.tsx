import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonIcon,
  IonRow,
  IonModal,
} from "@ionic/react";
import { add, arrowBack } from "ionicons/icons";
import { StoryItem } from "../components/StoryItem";
import { withRouter, useHistory } from "react-router-dom";

const BackButton: React.FC = () => {
  let history = useHistory();

  return (
    <IonButton fill="clear" slot="icon-only" onClick={() => history.goBack()}>
      <IonIcon icon={arrowBack} /> Back
    </IonButton>
  );
};

export default withRouter(BackButton);

const modalStyle = {
  width: "15%",
  right: "15px",
  bottom: "15px",
  position: "absolute",
};
const buttonStyle = {
  right: "20px",
  position: "absolute",
};
export const EditStory: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [story] = useState([
    {
      src:
        "https://66.media.tumblr.com/baea33b98e5aa66abd0e5da888d06c44/tumblr_pkw4y0EZTh1uk7v3v_540.jpg",
      title: "Caaaat",
      date: "Sun, Dec 8, 2019",
      location: "Burnaby",
    },
    {
      src: "http://placekitten.com/g/200/300",
      title: "Cat",
      date: "Sun, Dec 8, 2019",
      location: "Burnaby",
    },
  ]);
  return (
    <IonPage>
      <IonHeader>
        <BackButton />
        <IonModal showBackdrop isOpen={showModal}>
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
          style={buttonStyle}
          fill="clear"
          slot="icon-only"
          onClick={() => setShowModal(true)}
        >
          <IonIcon icon={add} />
        </IonButton>
      </IonHeader>
      <IonContent>
        {story.map(item => {
          return <StoryItem {...item} />;
        })}
      </IonContent>
    </IonPage>
  );
};
