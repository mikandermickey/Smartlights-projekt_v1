/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LightControls from "./LightControls";
import { useContext } from "react";
import { LightContext } from "../contexts/LightContext";
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,

};
const style = css`
    overflow: hidden;
    margin-bottom: 2em;
`;


const LightsContainer = (props) => {
    const { lights } = useContext(LightContext);
    if (lights) console.log(lights)
    return (
        <div css={style}>
            <Flickity
                css={css` margin-left: 10em;`}
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions}>

                {lights && lights.map(light =>
                    <LightControls
                        icon={light.image}
                        place={light.place}
                        key={light.id} />
                )}

            </Flickity>
        </div>


    );
}

export default LightsContainer;