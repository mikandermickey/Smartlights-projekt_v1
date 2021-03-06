/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";
import Circles from "./Circles";
import { Router } from "@reach/router";

const Header = (props) => {
    const style = css`
        display:flex;
        justify-content: space-between;
        padding-top: 4.25em;
        padding-left: 1.5em;
        position: relative;
    `
    return (
        <header css={style}>
            <Router>
                <Headline path="/" />
                <Headline path="/:roomid" />
            </Router>
            <Circles circle="data/img/circles.svg" />
        </header>
    );
}

export default Header;