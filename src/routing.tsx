import React from 'react'
import { NativeRouter, Route } from "react-router-native";
import Main from './main';
import CreateEventPage from './pages/createEvent/createEvent';
import Event from './pages/event/event';
import ProfilePage from './pages/profile/profile';
import SearchPage from './pages/search/search';

const Routing: React.FC = () => {
  return (
    <NativeRouter>
      <Main>
        <Route exact path="/" component={SearchPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/create" component={CreateEventPage} />
        <Route path="/event/:id" component={Event} />
      </Main>
    </NativeRouter>
  )
}

export default Routing