/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overskrift from "./Overskrift";
import React from 'react';
import PowerButton from "./PowerButton";


const SingleRoom = () => {

    const styleH3 = css`
        color: #002D67;
        font-size: 19px;
    `;
    return (
        <React.Fragment>
            <Overskrift text="Intensity" />
            <PowerButton />
        </React.Fragment>

    );
}

export default SingleRoom;