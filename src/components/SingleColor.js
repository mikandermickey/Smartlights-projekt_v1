/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { BrightContext } from "../contexts/BrightContext";
import { useContext } from "react";

const SingleColor = ({ color, add }) => {
    const { setPicker } = useContext(BrightContext);

    const style = css`
        border-radius: 50%;
        background-color:${color};
        width: 29px;
        height: 29px;
        display:flex;
        justify-content:center;
        align-items: center;
        border:none;
        outline: none;
    `;
    return (
        <button onClick={(e) => setPicker(color)} css={style}>{add}</button>
    );
}

export default SingleColor;