/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from 'react';
const Brightness = () => {

    const styleDiv = css`
        display:flex;
        justify-content:space-between;
        width: 20.13em;
        margin-left: 1.5em;
        margin-top: 1em;
    `;
    const styleRange = css`
        width: 258px;
        margin: 0 10px;
    
    `;
    return (
        <div css={styleDiv}>
            <img src="data/img/off.svg" alt="Turned off" />
            <label htmlFor="brightness"></label>
            <input css={styleRange} type="range" id="brightness" min="0" max="100" />
            <img src="data/img/on.svg" alt="Turned on" />


        </div>
    );
}

export default Brightness;