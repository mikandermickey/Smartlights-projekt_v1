/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";



const Headline = (props) => {
    const { rooms } = useContext(RoomContext);
    if (rooms) console.log(rooms)
    console.log(props)

    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
        text-transform: capitalize;
    `
    return (rooms &&
        <h1 css={style}>{props.roomid ? props.roomid : "Control Panel"}</h1 >
    )
};



export default Headline;