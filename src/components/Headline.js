/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";
import Avatar from "./Avatar";
import Thebulb from "./Thebulb";
import LightControls from "./LightControls";



const Headline = (props) => {
    const { rooms } = useContext(RoomContext);
    if (rooms) console.log(rooms)
    console.log(props)

    const style = css`
        display:flex;
        justify-content: space-between;
        padding-left: 1.5em;
        padding-bottom: 1.8em;
    `;
    const styleH = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
        text-transform: capitalize;
        padding-top: 3em;
    `
    return (rooms &&
        <div css={style}>
            <h1 css={styleH}>{props.roomid ? props.roomid : "Control Panel"}</h1 >
            <Avatar userImage={props.roomid ? "data/img/lampe.svg" : "data/img/user.svg"} />
            <Thebulb none={props.roomid ? "block" : "none"} />
            <LightControls show={props.roomid ? "none" : "none"} />
        </div>
    )
};



export default Headline;