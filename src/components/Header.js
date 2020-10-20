/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";

const Header = () => {
    const style = css`
        display:flex;
        justify-content: space-between;
        padding: 1em;
    `
    return (
        <header css={style}>
            <Headline text="Control Panel" />
        </header>
    );
}

export default Header;