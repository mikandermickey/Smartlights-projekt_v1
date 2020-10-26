/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";



const Headline = (props) => {
    const { rooms } = useContext(RoomContext);
    if (rooms) console.log(rooms)

    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
        text-transform: capitalize;
    `
    return (rooms ?
        <h1 css={style}>{props.roomid}</h1 > : <h1>Loading</h1>
    )
};



export default Headline;