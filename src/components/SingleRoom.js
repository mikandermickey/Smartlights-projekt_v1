/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overskrift from "./Overskrift";
import React from 'react';
import PowerButton from "./PowerButton";
import Brightness from "./Brightness";


const SingleRoom = () => {

    const styleH3 = css`
        color: #002D67;
        font-size: 19px;
    `;
    return (
        <React.Fragment>
            <Overskrift text="Intensity" />
            <PowerButton />
            <Brightness />
            <Overskrift text="Colors" />

            <Overskrift text="Scenes" />
        </React.Fragment>

    );
}

export default SingleRoom;