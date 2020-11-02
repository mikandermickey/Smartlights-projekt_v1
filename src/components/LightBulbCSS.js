/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { BrightContext } from "../contexts/BrightContext";

const LightBulbCSS = ({ fill, none }) => {
    const { opacity, setOpacity } = useContext(BrightContext);
    console.log(opacity)

    const style = css`
        position: absolute;
        top: 143px;
        right: 56px;
        display:${none};
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: ${fill};
        opacity: ${opacity / 100};
        
        `;
    return (
        <div css={style}></div>
    );
};

export default LightBulbCSS;