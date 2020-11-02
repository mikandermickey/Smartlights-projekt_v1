/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SingleColor from "./SingleColor";
import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";


const Colorbox = () => {
    const { colors } = useContext(ColorContext);
    if (colors) console.log(colors);

    const style = css`
    display:flex;
    justify-content: space-between;
    `;
    return (
        <div css={style}>
            {colors && colors.map(color =>
                <SingleColor
                    color={color} />
            )}
            <SingleColor color="#FFFFFF" add="+" />
        </div>
    );
}

export default Colorbox;