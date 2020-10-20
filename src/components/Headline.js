/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const Headline = ({ text }) => {
    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
    `
    return (
        <h1 css={style}>{text}</h1>
    );
}

export default Headline;