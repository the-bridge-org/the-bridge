import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { aperture, archive, chatbubbles, home, options } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { Home } from "./pages/Home";
import { More } from "./pages/More";
import { Note } from "./pages/Note";
import { Story } from "./pages/Story";

export const Router: React.FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/story" component={Story} exact={true} />
          <Route path="/chat" component={Chat} exact={true} />
          <Route path="/note" component={Note} exact={true} />
          <Route path="/more" component={More} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="story" href="/story">
            <IonIcon icon={aperture} />
            <IonLabel>Story</IonLabel>
          </IonTabButton>
          <IonTabButton tab="chat" href="/chat">
            <IonIcon icon={chatbubbles} />
            <IonLabel>Chat</IonLabel>
          </IonTabButton>
          <IonTabButton tab="note" href="/note">
            <IonIcon icon={archive} />
            <IonLabel>Notes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="more" href="/more">
            <IonIcon icon={options} />
            <IonLabel>More</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
