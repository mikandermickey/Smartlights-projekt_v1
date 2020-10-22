/** @jsx jsx */
import { jsx } from "@emotion/core";
import Rooms from "./Rooms";
import Overskrift from "./Overskrift";
import React from 'react';

const RoomWrapper = () => {
    return (
        <React.Fragment>
            <Overskrift text="All Rooms" />
            <Rooms place="Bed Room" nr="4" icon="data/img/bed.svg" room="bedroom" />
            <Rooms place="Living Room" nr="2" icon="data/img/room.svg" room="livingroom" />
            <Rooms place="Kitchen" nr="5" icon="data/img/kitchen.svg" room="kitchen" />
            <Rooms place="Bathroom" nr="1" icon="data/img/bathtube.svg" room="bathroom" />
            <Rooms place="Outdoor" nr="5" icon="data/img/house.svg" room="outdoor" />
            <Rooms place="Balcony" nr="2" icon="data/img/balcony.svg" room="balcony" />
        </React.Fragment>

    );
}

export default RoomWrapper;