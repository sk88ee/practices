import React, { Component } from "react";

import "./ChatListMenu.css";
import menuImage from "assets/menu.svg";
import friendImage from "assets/friend.svg";

class ChatListMenu extends Component {

    render() {
        return (
            <div class="MenuBar">
                <img src={menuImage} alt="menu" className="MenuImage"></img>
                <div className="Title">채팅</div>
                <img src={friendImage} alt="friend" className="Friend"></img>
            </div>
        );
    }

}

export default ChatListMenu;