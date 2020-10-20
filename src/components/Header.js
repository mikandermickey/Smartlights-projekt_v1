/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";
import Avatar from "../images/user.svg"

const Header = () => {
    const style = css`
        display:flex;
        justify-content: space-between;
    `
    return (
        <header css={style}>
            <Headline text="Control Panel" />
        </header>
    );
}

export default Header;