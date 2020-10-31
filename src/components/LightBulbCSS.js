/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const LightBulbCSS = ({ fill, none }) => {
    const style = css`
        position: absolute;
        top: 126px;
        right: 34px;
        display:${none};`
    return (
        <div css={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                <defs>
                    <filter id="Ellipse_10" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feFlood floodColor="#ffc72f" />
                        <feComposite operator="in" in2="blur" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>
                <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_10)">
                    <circle id="Ellipse_10-2" data-name="Ellipse 10" cx="11" cy="11" r="11" transform="translate(24 21)" fill={fill} />
                </g>
            </svg>
        </div>
    );
}

export default LightBulbCSS;