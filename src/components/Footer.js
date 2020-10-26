/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "@reach/router";

const Footer = () => {
    const style = css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1em 0;
        background-color: white;
        position: fixed;
        width: 375px;
        bottom: 0;
        box-shadow: 0px -1px 2px rgba(50, 50, 50, 0.75);  
    `;
    return (
        <footer css={style}>
            <img src="data/img/bulb.svg" alt="Lightbulb" />
            <Link to="/">
                <img src="data/img/home.svg" alt="Home" />
            </Link>
            <img src="data/img/settings.svg" alt="Settings" />
        </footer>



    );
}

export default Footer;