/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SingleColor from "./SingleColor";
const Colorbox = () => {
    const style = css`
    display:flex;
    padding-left: 0.8em;
    
    
    `;
    return (
        <div css={style}>
            <SingleColor color="#FF9B9B" />
            <SingleColor color="#94EB9E" />
            <SingleColor color="#94CAEB" />
            <SingleColor color="#A594EB" />
            <SingleColor color="#DE94EB" />
            <SingleColor color="#EBD094" />
            <SingleColor color="#FFFFFF" add="data/img/plus.svg" />
        </div>
    );
}

export default Colorbox;