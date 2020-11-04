/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";
import Circles from "./Circles";
import { Router } from "@reach/router";

const Header = (props) => {
    const style = css`
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