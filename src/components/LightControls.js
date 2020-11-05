/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const LightControls = ({ place, icon }) => {
    const style = css`
        width: 124px;
        height:45px;
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: space-around;
        font-size: 13px;
        border-radius: 12px;
        margin-right: 10px;
        color: #002D67;
    `;

    return (
        <div>
            <div css={style}>
                <img src={icon} alt="Icon" />
                <p>{place}</p>
            </div>
        </div>
    );
}

export default LightControls;