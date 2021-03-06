/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "../stylesheets/Range.scss";
import { useContext } from "react";
import { BrightContext } from "../contexts/BrightContext";

const Brightness = () => {
    const { opacity, setOpacity } = useContext(BrightContext);
    console.log(opacity)

    const styleDiv = css`
        display:flex;
        justify-content:space-between;
        width: 20.13em;
    `;
    const styleRange = css`
        margin: 0 10px;
        background-color: yellow;
    `;
    return (
        <div css={styleDiv}>
            <img src="data/img/off.svg" alt="Turned off" />
            <label htmlFor="brightness"></label>
            <input className="range" css={styleRange} type="range" id="brightness" onChange={(e) => setOpacity(e.target.value)} value={opacity} min="0" max="100" />
            <img src="data/img/on.svg" alt="Turned on" />
        </div>
    );
}

export default Brightness;