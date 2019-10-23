import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./RoomList.css";
import profile1 from "assets/img-profile-1.jpg";
import profile1_2x from "assets/img-profile-1@2x.jpg";
import profile1_3x from "assets/img-profile-1@3x.jpg";
import profile2 from "assets/img-profile-2.jpg";
import profile2_2x from "assets/img-profile-2@2x.jpg";
import profile2_3x from "assets/img-profile-2@3x.jpg";
import profile3 from "assets/img-profile-3.jpg";
import profile3_2x from "assets/img-profile-3@2x.jpg";
import profile3_3x from "assets/img-profile-3@3x.jpg";
import profile4 from "assets/img-profile-4.jpg";
import profile4_2x from "assets/img-profile-4@2x.jpg";
import profile4_3x from "assets/img-profile-4@3x.jpg";
import profile5 from "assets/img-profile-5.jpg";
import profile5_2x from "assets/img-profile-5@2x.jpg";
import profile5_3x from "assets/img-profile-5@3x.jpg";
import profile6 from "assets/img-shot-6.jpg";
import profile6_2x from "assets/img-shot-6@2x.jpg";
import profile6_3x from "assets/img-shot-6@3x.jpg";
import profile7 from "assets/img-shot-7.jpg";
import profile7_2x from "assets/img-shot-7@2x.jpg";
import profile7_3x from "assets/img-shot-7@3x.jpg";



class RoomList extends Component {

    loadData = (data) => {
        /*
            Server Request 
            var xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                console.log(xhr.responseText)
            })
            xhr.open('GET', 'https://ChattingLogData')
    
            xhr.send()
        */
        return (

            <Link to={{
                pathname: "/chatRoom/" + data.id,
                state: {
                    id: data.id,
                    sender: data.name,
                    chatLog: data.Message,
                    toggle: false
                }
            }}>
                <div className="ListBar">
                    <div ClassName="FaceBox">
                        {data.id == 1 && <img src={profile1} srcSet={profile1_2x, profile1_3x} alt="IU" className="Face" />}
                        {data.id == 2 && <img src={profile2} srcSet={profile2_2x, profile2_3x} alt="IU" className="Face" />}
                        {data.id == 3 && <img src={profile3} srcSet={profile3_2x, profile3_3x} alt="IU" className="Face" />}
                        {data.id == 4 && <img src={profile4} srcSet={profile4_2x, profile4_3x} alt="IU" className="Face" />}
                        {data.id == 5 && <img src={profile5} srcSet={profile5_2x, profile5_3x} alt="IU" className="Face" />}
                        {data.id == 6 && <img src={profile6} srcSet={profile6_2x, profile6_3x} alt="IU" className="Face" />}
                        {data.id == 7 && <img src={profile7} srcSet={profile7_2x, profile7_3x} alt="IU" className="Face" />}
                    </div>
                    <div className="Sender">{data.name}</div>
                    <div className="Message">{data.Message[data.Message.length - 1]}</div>
                    <div className="ReceiveTime">{data.ReceiveTime}</div>

                    {data.ReceiveNum > 0 &&
                        <div className="ReceiveBox">
                            <div className="ReceiveNum">{data.ReceiveNum}</div>
                        </div>
                    }

                </div>
            </Link>

        );
    }

    render() {
        var chatLog = this.props.data;
        var chatList = chatLog.map(this.loadData);

        return (
            <div>
                {chatList}
            </div>
        );
    }
}

export default RoomList;