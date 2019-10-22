import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ChatMain from "containers/ChatListMain";
import ChatRoom from "containers/ChatRoomMain";

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={ChatMain} />
      <Route path="/chatRoom/:id" component={ChatRoom} />
    </div>
  </Router>
);

export default Root;
