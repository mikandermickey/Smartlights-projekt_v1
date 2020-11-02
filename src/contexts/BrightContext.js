import React, { createContext, useState } from "react";

export const BrightContext = createContext();

const BrightContextProvider = (props) => {
    const [opacity, setOpacity] = useState("");
    const [picker, setPicker] = useState("");

    return (
        <BrightContext.Provider value={{ picker, setPicker, opacity, setOpacity }}>
            {props.children}
        </BrightContext.Provider>
    );
};

export default BrightContextProvider;