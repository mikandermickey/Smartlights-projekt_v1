/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { BrightContext } from "../contexts/BrightContext";

const LightBulbCSS = ({ none }) => {
    const { opacity, picker } = useContext(BrightContext);
    console.log(opacity)
    console.log(picker)

    const style = css`
        position: absolute;
        top: 143px;
        right: 56px;
        display:${none};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: ${picker};
        opacity: ${opacity / 100};
        
        `;
    return (
        <div css={style}></div>
    );
};

export default LightBulbCSS;