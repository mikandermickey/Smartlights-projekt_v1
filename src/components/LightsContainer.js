/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Swiper } from 'swiper/react';
import LightControls from "./LightControls";
import { useContext } from "react";
import { LightContext } from "../contexts/LightContext";
import 'swiper/swiper.scss';

const LightsContainer = (props) => {
    const { lights } = useContext(LightContext);
    if (lights) console.log(lights)
    const style = css`
        display:flex;
        justify-content:space-around;
        margin-bottom: 1.5em;
    `;
    return (
        <div className="swiper-container">
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")
                }
                onSwiper={(swiper) => console.log(swiper)}

            >
                <div css={style} className="swiper-wrapper">
                    {lights && lights.map(light =>
                        <LightControls
                            icon={light.image}
                            place={light.place}
                            key={light.id} />
                    )}
                </div>
            </Swiper >
        </div>

    );
}

export default LightsContainer;