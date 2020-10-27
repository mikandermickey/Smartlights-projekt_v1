/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LightControls = ({ show }) => {
    const style = css`
        width: 124px;
        height:45px;
        background-color: white;
        display: ${show}
    `;
    return (
        <div css={style}>

        </div>
    );
}

export default LightControls;