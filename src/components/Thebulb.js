/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Thebulb = ({ none }) => {
    const style = css`
        position: absolute;
        top: 126px;
        right: 34px;
        display:${none};
    `;
    return (
        <img css={style} src="data/img/lampebulb.svg" alt="Pære" />
    );
}

export default Thebulb;