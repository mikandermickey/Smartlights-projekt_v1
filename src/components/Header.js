/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Headline from "./Headline";
import Avatar from "../images/user.svg"

const Header = () => {
    return (
        <header css={css`
            display:flex;
            justify-content: space-between;
        `}>
            <Headline text="Control Panel" />
            <img src={Avatar} alt="user" />
        </header>
    );
    );
}

export default Header;