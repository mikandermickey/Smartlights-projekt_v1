/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Circles = ({ circle }) => {

    const style = css`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 375px;
    `;
    return (
        <img css={style} src={circle} alt="circles" />


    );
}

export default Circles;