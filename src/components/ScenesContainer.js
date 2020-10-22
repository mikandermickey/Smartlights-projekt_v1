/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Scenes from "./Scenes";

const ScenesContainer = ({ color }) => {
    const style = css`
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 2em;
    `;
    return (
        <div css={style}>
            <Scenes color="#FF9B9B" mood="Birthday" />
            <Scenes color="#A693EB" mood="Party" />
            <Scenes color="#93CAEB" mood="Relax" />
            <Scenes color="#89DD94" mood="Fun" />
        </div>
    );
}

export default ScenesContainer;