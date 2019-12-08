import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { useMessagesQuery } from "../graphql/message";

export const ChatHistory: React.FC = () => {
  const { data, refetch } = useMessagesQuery();

  if (!data) {
    refetch();
  }

  return (
    <IonList>
      {data && data.messages ? (
        data.messages
          .map(message => (
            <IonItem lines="none" key={message.id}>
              <IonLabel>
                <h2>{message.text}</h2>
              </IonLabel>
            </IonItem>
          ))
          .reverse()
      ) : (
        <></>
      )}
    </IonList>
  );
};
