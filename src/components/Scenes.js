/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Scenes = ({ mood, color }) => {
    const style = css`
        border-radius: 13px;
        background-color: ${color};
        width: 150px;
        height: 55px;
        display:flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 20px;
    `;

    const styleP = css`
        font-size:13px; 
        color: white;
        font-weight: bold;
        `;
    return (
        <div css={style}>
            <img src="data/img/scene_bulb.svg" alt="Light Bulb" />
            <p css={styleP}>{mood}</p>
        </div>

    );
}

export default Scenes;