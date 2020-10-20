/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const MainLayout = () => {
    const style = css`
        width: 100%;
        background-color: #F6F8FB;
        border-top-left-radius: 2em;
        border-top-right-radius: 2em;
        border:none;
    `;
    return (
        <main css={style}></main>
    );
}

export default MainLayout;