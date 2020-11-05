/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import RoomWrapper from "./RoomWrapper";
import { Router } from "@reach/router"
import ControlRoom from "./ControlRoom";

const MainLayout = () => {
    //const { room } = useContext(RoomContext);
    //room && console.log(room);
    const style = css`
        width: 100%;
        background-color: #F6F8FB;
        border-top-left-radius: 2em;
        border-top-right-radius: 2em;
        border:none;
        position: relative;
        padding: 0 1.5em;
        margin-bottom: 5em;
    `;
    return (
        <main css={style}>
            <Router>
                <RoomWrapper path="/" />
                <ControlRoom path=":roomid" />
            </Router>
        </main>
    );
};

export default MainLayout;