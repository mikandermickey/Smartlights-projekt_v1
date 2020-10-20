/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Avatar from "../images/user.svg"

const Headline = ({ text }) => {
    const style = css`
        font-size: 1.8em;
        color: white;
        width: 2em;
    `
    return (
        <header css={css`
            display:flex;
            justify-content: space-between;
        `}>
            <h1 css={style}>{text}</h1>
            <img src={Avatar} alt="user" />
        </header>
    );
}

export default Headline;