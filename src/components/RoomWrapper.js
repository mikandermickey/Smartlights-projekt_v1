/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Rooms from "./Rooms";
import Overskrift from "./Overskrift";
import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";

const RoomWrapper = () => {

    const { rooms } = useContext(RoomContext);
    if (rooms) console.log(rooms)
    const style = css`
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    `;

    return (
        <React.Fragment>
            <Overskrift text="All Rooms" />
            <div css={style}>
                {rooms && rooms.map(room =>
                    <Rooms place={room.id} key={room.id} nr={room.lights} icon={room.image} room={room.id} />
                )}
                {/*
                Loopet ovenfor erstatter den hardcodede ugave:
                <Rooms place="Bed Room" nr="4" icon="data/img/bed.svg" room="bedroom" />
                <Rooms place="Living Room" nr="2" icon="data/img/room.svg" room="livingroom" />
                <Rooms place="Kitchen" nr="5" icon="data/img/kitchen.svg" room="kitchen" />
                <Rooms place="Bathroom" nr="1" icon="data/img/bathtube.svg" room="bathroom" />
                <Rooms place="Outdoor" nr="5" icon="data/img/house.svg" room="outdoor" />
    <Rooms place="Balcony" nr="2" icon="data/img/balcony.svg" room="balcony" />*/}
            </div>
        </React.Fragment>

    );
}

export default RoomWrapper;