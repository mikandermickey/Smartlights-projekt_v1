/** @jsx jsx */
import { jsx } from "@emotion/core";

const Avatar = ({ userImage }) => {
    return (
        <img src={userImage} alt="User" />
    );
}

export default Avatar;