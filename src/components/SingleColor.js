/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SingleColor = ({ color, add }) => {
    const style = css`
        border-radius: 50%;
        background-color:${color};
        width: 29px;
        height: 29px;
        display: inline-block;
        display:flex;
        justify-content:center;
        align-items: center;
    `;
    return (
        <div css={style}><button css={css`border:none; background-color:white;`}>{add}</button></div>
    );
}

export default SingleColor;