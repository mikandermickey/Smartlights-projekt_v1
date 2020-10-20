/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Circles = ({ circle }) => {

    const style = css`
        position: absolute;
        top: -90px;
        left: -50px;
    `;
    return (
        <img css={style} src={circle} alt="circles" />


    );
}

export default Circles;