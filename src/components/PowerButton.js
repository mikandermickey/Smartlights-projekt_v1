/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const PowerButton = () => {
    const style = css`
        position: absolute;
        top: -20px;
        right: 10px;
        `;
    return (
        <img css={style} src="data/img/power.svg" alt="PowerButton" />


    );
}

export default PowerButton;