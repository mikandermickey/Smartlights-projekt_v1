/** @jsx jsx */
import { jsx, } from "@emotion/core";
import SingleRoom from "./SingleRoom";
import React from 'react';

const ControlRoom = (props) => {
    console.log(props)
    return (

        <React.Fragment>
            <SingleRoom />
        </React.Fragment>


    );
}

export default ControlRoom;