/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const Rooms = ({ icon, place, nr }) => {
    const styleDiv = css`
        background-color: white;
        display: inline-block;
        padding-left: 1.25em;
        margin-left: 1.5em;
        margin-top: 1.875em;
        border-radius: 1.5em;
        width: 150px;
        height: 150px;

    `;
    const styleImage = css`
        padding-top: 1.625em;
        padding-bottom: 1em;
    
    `;

    const styleH = css`
        font-size: 1.2em;
    `;

    const styleP = css`
        font-size: 0.8em;
        color: #FFA939;
        padding: 0.725em 0;
    
    `;
    return (
        <div css={styleDiv}>
            <img css={styleImage} src={icon} alt="Icon" />
            <h3 css={styleH}>{place}</h3>
            <p css={styleP}>{nr} Lights</p>
        </div>
    );
}

export default Rooms;