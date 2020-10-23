/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Overskrift = ({ text }) => {
    const style = css`
        color: #002D67;
        padding-top: 1.8em;
        font-size: 19px;
        margin-bottom: 1em;
    `;
    return (
        <h2 css={style}>{text}</h2>
    );
}

export default Overskrift;