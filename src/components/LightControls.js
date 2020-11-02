/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { SwiperSlide } from "swiper/react";


const LightControls = ({ show, place, icon }) => {
    const style = css`
        width: 124px;
        height:45px;
        background-color: rosybrown;
        display:flex;
        align-items: center;
        justify-content: space-around;
        font-size: 13px;
        border-radius: 12px;
    `;
    const slide = css`
        margin-right: 1em;

    
    `;
    return (
        <SwiperSlide css={slide}>
            <div css={style}>
                <img src={icon} alt="Icon" />
                <p>{place}</p>
            </div>
        </SwiperSlide>
    );
}

export default LightControls;