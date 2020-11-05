/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Avatar = ({ userImage }) => {
    const style = css`
        z-index: 2;
    `;
    return (
        <img css={style} src={userImage} alt="User" />
    );
}

export default Avatar;