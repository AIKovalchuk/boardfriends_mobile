import React from "react";
import { NativeRouter, Route } from "react-router-native";
import Main from "./main";
import CreateEventPage from "./pages/createEvent/createEvent";
import EventPage from "./pages/event/event";
import LoginPage from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import SearchPage from "./pages/search/search";

const Routing: React.FC = () => {
  return (
    <NativeRouter>
      <Main>
        <Route exact path="/" component={SearchPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/create" component={CreateEventPage} />
        <Route path="/event/:id" component={EventPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={ProfilePage} />
      </Main>
    </NativeRouter>
  );
};

export default Routing;
