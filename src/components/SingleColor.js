/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SingleColor = ({ color, add }) => {
    const style = css`
        border-radius: 50%;
        background-color:${color};
        width: 29px;
        height: 29px;
        display: inline-block;
        margin-left: 1em;
        display:flex;
        justify-content:center;
        align-items: center;
    `;
    return (
        <div css={style}><img src={add} alt="" /></div>
    );
}

export default SingleColor;