/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import React from 'react'
import { RoomContext } from "../contexts/RoomContext";
import Avatar from "./Avatar";
import LightBulbCSS from "./LightBulbCSS";
import LightsContainer from "./LightsContainer";



const Headline = (props, { show }) => {
    const { rooms } = useContext(RoomContext);
    if (rooms) console.log(rooms)

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
        <React.Fragment>

            <div css={style}>
                <h1 css={styleH}>{props.roomid ? props.roomid : "Control Panel"}</h1 >
                <Avatar userImage={props.roomid ? "data/img/lampe.svg" : "data/img/user.svg"} />
                <LightBulbCSS fill="yellow" none={props.roomid ? "block" : "none"} />
            </div>
            <LightsContainer />
        </React.Fragment>
    )
};



export default Headline;