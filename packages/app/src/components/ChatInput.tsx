import {
  IonButton,
  IonFooter,
  IonInput,
  IonItem,
  IonToolbar,
} from "@ionic/react";
import React, { useCallback, useState } from "react";
import { useCreateMessageMutation } from "../graphql/message";

export const ChatInput: React.FC = () => {
  const [text, setText] = useState("");
  const [createMessageMutation] = useCreateMessageMutation();

  const sendMessage = useCallback(
    (text: string) => {
      createMessageMutation({ variables: { payload: { text } } }).then(res => {
        if (res.data && res.data.createMessage) {
          setText("");
        }
      });
    },
    [createMessageMutation, setText]
  );

  return (
    <IonFooter>
      <IonToolbar>
        <IonItem lines="none">
          <IonInput
            type="text"
            placeholder="Say something ..."
            onIonChange={e =>
              typeof e.detail.value === "string" && setText(e.detail.value)
            }
            onKeyPress={e =>
              text !== "" && e.key === "Enter" && sendMessage(text)
            }
            value={text}
          />
          <IonButton disabled={text === ""} onClick={() => sendMessage(text)}>
            Send
          </IonButton>
        </IonItem>
      </IonToolbar>
    </IonFooter>
  );
};
