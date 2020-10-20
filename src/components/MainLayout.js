/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overskrift from "./Overskrift";
import Rooms from "./Rooms";

const MainLayout = () => {
    const style = css`
        width: 100%;
        background-color: #F6F8FB;
        border-top-left-radius: 2em;
        border-top-right-radius: 2em;
        border:none;
    `;
    return (
        <main css={style}>
            <Overskrift text="All Rooms" />
            <Rooms place="Bed Room" nr="4" icon="data/img/bed.svg" />
            <Rooms place="Living Room" nr="2" icon="data/img/room.svg" />
            <Rooms place="Kitchen" nr="5" icon="data/img/kitchen.svg" />
            <Rooms place="Bathroom" nr="1" icon="data/img/bathtube.svg" />
            <Rooms place="Outdoor" nr="5" icon="data/img/house.svg" />
            <Rooms place="Balcony" nr="2" icon="data/img/balcony.svg" />
        </main>
    );
}

export default MainLayout;