import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonIcon,
  IonRow,
  IonToolbar,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import { StoryItem } from "../components/StoryItem";
import { withRouter, useHistory } from "react-router-dom";
import { storyStyle } from "../components/Story";
import { AddStoryModal } from "../components/AddStoryModal";

const BackButton: React.FC = () => {
  let history = useHistory();

  return (
    <div>
      <IonButton fill="clear" slot="icon-only" onClick={() => history.goBack()}>
        <IonIcon icon={arrowBack} /> Back
      </IonButton>
    </div>
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
  const {
    titleStyle,
    imgStyle,
    textStyle,
    albumStyle,
    dateStyle,
    locationStyle,
  } = storyStyle;
  const cover = story[0];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol>
              <BackButton />
            </IonCol>
            <IonCol align-self-center size="6"></IonCol>
            <IonCol align-self-end>
              <AddStoryModal edit={true} date={story[0].date} />
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="light" button>
          <IonCardContent>
            <div className="thumbnail" style={albumStyle}>
              <img src={cover.src} style={imgStyle} />

              <div style={textStyle}>
                <div style={dateStyle}>
                  <p>{cover.date}</p>
                </div>
                <div style={titleStyle}>
                  <b>{cover.title}</b>
                </div>
                <div style={locationStyle}>
                  <p>{cover.location}</p>
                </div>
              </div>
            </div>
          </IonCardContent>
        </IonCard>
        {story.map(item => {
          return <StoryItem {...item} />;
        })}
      </IonContent>
    </IonPage>
  );
};
