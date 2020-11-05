/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "../stylesheets/Transitions.scss";

const Circles = ({ circle }) => {


    return (
        <img className="circles" src={circle} alt="circles" />
    );
}

export default Circles;