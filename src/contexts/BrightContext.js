import React, { createContext, useState } from "react";
export const BrightContext = createContext();

const BrightContextProvider = (props) => {
    const [opacity, setOpacity] = useState("#ffffff");
    const [picker, setPicker] = useState("#ffffff");

    return (
        <BrightContext.Provider value={{ picker, setPicker, opacity, setOpacity }}>
            {props.children}
        </BrightContext.Provider>
    );
};

export default BrightContextProvider;