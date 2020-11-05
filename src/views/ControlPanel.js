/** @jsx jsx */
import { jsx } from "@emotion/core";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";
import React from 'react';

const ControlPanel = () => {
    return (
        <React.Fragment>
            <Header />
            <MainLayout />
        </React.Fragment>
    );
}

export default ControlPanel;