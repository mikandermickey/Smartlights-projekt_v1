import React, { createContext, useState, useEffect } from "react";
export const LightContext = createContext();

const LightContextProvider = (props) => {
    const [lights, setLights] = useState(null);
    const [current, setCurrent] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/data/api/roomData.json")
            .then((response) => response.json())
            .then((result) => {
                setLights(result.lights)
            });
    }, []);
    return (
        <LightContext.Provider value={{ lights, current, setCurrent }}>
            {props.children}
        </LightContext.Provider>
    );
};

export default LightContextProvider;