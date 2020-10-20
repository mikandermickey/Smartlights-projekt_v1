/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";

const Header = () => {
    const style = css`
        display:flex;
        justify-content: space-between;
        padding-top: 4.25em;
        padding-left: 1.5em;
    `
    return (
        <header css={style}>
            <Headline text="Control Panel" />
        </header>
    );
}

export default Header;