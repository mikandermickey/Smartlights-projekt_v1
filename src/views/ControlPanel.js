/** @jsx jsx */
import { jsx } from "@emotion/core";
import MainLayout from "../components/MainLayout";
import Header from "../components/Header";

const ControlPanel = () => {
    return (
        <div>
            <Header />
            <MainLayout />
        </div>
    );
}

export default ControlPanel;