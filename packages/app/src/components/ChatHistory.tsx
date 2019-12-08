import { IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { NEW_MESSAGE_SUBSCRIPTION, useMessagesQuery } from "../graphql/message";

let unsubscribe: (() => void) | null = null;

export const ChatHistory: React.FC = () => {
  const { data, refetch, subscribeToMore } = useMessagesQuery();

  if (!data) {
    refetch();
  }

  if (!unsubscribe) {
    unsubscribe = subscribeToMore({
      document: NEW_MESSAGE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newMessage = (subscriptionData.data as any).newMessage;

        return {
          ...prev,
          messages: [newMessage, ...prev.messages],
        };
      },
      variables: { topic: sessionStorage.getItem("relationshipId") },
    });
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
