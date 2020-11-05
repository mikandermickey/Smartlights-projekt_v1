import React, { createContext, useState, useEffect } from "react";
export const ColorContext = createContext();

const ColorContextProvider = (props) => {
    const [colors, setColors] = useState(null);
    const [current, setCurrent] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/data/api/roomData.json")
            .then((response) => response.json())
            .then((result) => {
                setColors(result.colors)
            });
    }, []);
    return (
        <ColorContext.Provider value={{ colors, current, setCurrent }}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorContextProvider;