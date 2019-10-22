  
import React, { Component } from "react"
import "./StatusBar.css"

import bluetoothIcon from "assets/icons8-bluetooth-32.png";
import wifi from "assets/connection.svg";
import comPass from "assets/compass.svg";

class StatusBar extends Component {

    render() {
        return (
            <div className="StatusBar">
                <div className="Low-Bar"></div>
                <div className="Middle-Bar"></div>
                <div className="Top-Bar"></div>
                <div className="Empty-Bar"></div>
                <div className="Carrier" >Carrier</div>
                <img src={wifi} alt="wifi" className="Wifi"/>
                <time>1:20 PM</time>
                <img src={bluetoothIcon} alt="bluetoothIcon" className="Bluetooth"/>
                <div className="BatteryPercent">100%</div>
                <div className="Battery"></div>
                <div className="Battery-final"></div>
            </div>
        );
    }

}

export default StatusBar;