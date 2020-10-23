/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";


const Headline = (props, current, setCurrent) => {

    const { room } = useContext(RoomContext);
    if (room) console.log(room)
    let currentroom;
    console.log(props.roomid)
    if (room) {
        currentroom = room.find(room => {
            return room.id === props.roomid
        })
    }
    console.log(setCurrent);
    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
        text-transform: capitalize;
    `
    return room ? (
        <h1 css={style}>{room[0].id}</h1>
    ) : <h1>Loading</h1>
};



export default Headline;