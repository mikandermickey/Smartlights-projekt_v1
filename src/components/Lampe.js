/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "../stylesheets/Transitions.scss";


const Lampe = ({ userImage }) => {
    return (
        <img className="lamp" src={userImage} alt="Lamp" />
    );
}

export default Lampe;