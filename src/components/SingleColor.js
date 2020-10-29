/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SingleColor = ({ color, add }) => {
    const style = css`
        border-radius: 50%;
        background-color:${color};
        width: 29px;
        height: 29px;
        display:flex;
        justify-content:center;
        align-items: center;
        border:none;
        outline: none;
    `;
    return (
        <button css={style} onClick="click">{add}</button>
    );
}

export default SingleColor;