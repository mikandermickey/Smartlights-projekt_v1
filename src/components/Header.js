/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";
import Avatar from "./Avatar";

const Header = () => {
    const style = css`
        display:flex;
        justify-content: space-between;
        padding-top: 4.25em;
        padding-left: 1.5em;
        padding-bottom: 1.8em;
    `
    return (
        <header css={style}>
            <Headline text="Control Panel" />
            <Avatar />
        </header>
    );
}

export default Header;