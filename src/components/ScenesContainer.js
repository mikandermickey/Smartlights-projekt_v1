/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Scenes from "./Scenes";

const ScenesContainer = ({ color }) => {
    const style = css`
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 2em;
    `;

    const red = css`
        background: rgb(255,155,155);
        background: -moz-linear-gradient(90deg, rgba(255,155,155,1) 0%, rgba(255,188,145,1) 50%);
        background: -webkit-linear-gradient(90deg, rgba(255,155,155,1) 0%, rgba(255,188,145,1) 50%);
        background: linear-gradient(90deg, rgba(255,155,155,1) 0%, rgba(255,188,145,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff9b9b",endColorstr="#ffbc91",GradientType=1);
    `
    const purple = css`
        background: rgb(166,147,235);
        background: -moz-linear-gradient(90deg, rgba(166,147,235,1) 0%, rgba(218,147,235,1) 50%);
        background: -webkit-linear-gradient(90deg, rgba(166,147,235,1) 0%, rgba(218,147,235,1) 50%);
        background: linear-gradient(90deg, rgba(166,147,235,1) 0%, rgba(218,147,235,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a693eb",endColorstr="#da93eb",GradientType=1);
    `
    const blue = css`
        background: rgb(147,202,235);
        background: -moz-linear-gradient(90deg, rgba(147,202,235,1) 0%, rgba(147,221,235,1) 50%);
        background: -webkit-linear-gradient(90deg, rgba(147,202,235,1) 0%, rgba(147,221,235,1) 50%);
        background: linear-gradient(90deg, rgba(147,202,235,1) 0%, rgba(147,221,235,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#93caeb",endColorstr="#93ddeb",GradientType=1);
    `
    const green = css`
        background: rgb(137,221,148);
        background: -moz-linear-gradient(90deg, rgba(137,221,148,1) 0%, rgba(191,236,146,1) 50%);
        background: -webkit-linear-gradient(90deg, rgba(137,221,148,1) 0%, rgba(191,236,146,1) 50%);
        background: linear-gradient(90deg, rgba(137,221,148,1) 0%, rgba(191,236,146,1) 50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#89dd94",endColorstr="#bfec92",GradientType=1);
    `
    return (
        <div css={style}>
            <Scenes color={red} mood="Birthday" />
            <Scenes color={purple} mood="Party" />
            <Scenes color={blue} mood="Relax" />
            <Scenes color={green} mood="Fun" />
        </div>
    );
}

export default ScenesContainer;