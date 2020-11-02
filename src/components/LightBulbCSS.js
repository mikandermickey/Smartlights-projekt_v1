/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LightBulbCSS = ({ fill, none, opacity }) => {

    const style = css`
        position: absolute;
        top: 143px;
        right: 56px;
        display:${none};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: ${fill};
        opacity: ${opacity};
        
        `;
    return (
        <div css={style}></div>
    );
}

export default LightBulbCSS;