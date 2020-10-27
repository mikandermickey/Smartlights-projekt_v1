/** @jsx jsx */
import { jsx } from "@emotion/core";

const Lampe = ({ userImage }) => {
    return (
        <img src={userImage} alt="Lamp" />
    );
}

export default Lampe;