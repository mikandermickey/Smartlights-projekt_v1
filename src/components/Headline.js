/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { RoomContext } from "../contexts/RoomContext";


const Headline = (props, current, setCurrent) => {

    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
        text-transform: capitalize;
    `
    return (
        <h1 css={style}>blab</h1>
    )
};



export default Headline;