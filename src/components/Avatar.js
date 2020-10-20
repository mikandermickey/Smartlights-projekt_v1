/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import userImage from "../images/user.svg";

const Avatar = () => {
    return (
        <img src={userImage} alt="User" />
    );
}

export default Avatar;