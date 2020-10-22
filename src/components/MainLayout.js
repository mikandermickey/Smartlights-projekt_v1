/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RoomWrapper from "./RoomWrapper";
import { Router } from "@reach/router"
import ControlRoom from "./ControlRoom";

const MainLayout = () => {
    const style = css`
        width: 100%;
        background-color: #F6F8FB;
        border-top-left-radius: 2em;
        border-top-right-radius: 2em;
        border:none;
        position: relative;
        padding-bottom: 5em;
    `;
    return (

        <main css={style}>
            <Router>
                <RoomWrapper path="/" />
                <ControlRoom path="/bedroom" />
            </Router>
        </main>
    );
}

export default MainLayout;