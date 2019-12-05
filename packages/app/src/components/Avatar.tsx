import React from "react";
import {
  IonAvatar,
  IonChip,
  IonItem,
  IonLabel,
  IonContent,
} from "@ionic/react";

export const Avatar: React.FC = () => {
  return (
    <IonContent>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
    </IonContent>
  );
};
