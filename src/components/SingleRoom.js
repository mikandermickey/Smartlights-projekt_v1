/** @jsx jsx */
import { jsx } from "@emotion/core";
import Overskrift from "./Overskrift";
import React from 'react';
import PowerButton from "./PowerButton";
import Brightness from "./Brightness";
import ColorBox from "./Colorbox";
import ScenesContainer from "./ScenesContainer";


const SingleRoom = () => {
    return (
        <React.Fragment>
            <Overskrift text="Intensity" />
            <PowerButton />
            <Brightness />
            <Overskrift text="Colors" />
            <ColorBox />
            <Overskrift text="Scenes" />
            <ScenesContainer />
        </React.Fragment>

    );
}

export default SingleRoom;