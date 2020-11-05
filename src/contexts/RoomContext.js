import React, { createContext, useState, useEffect } from "react";
export const RoomContext = createContext();

const RoomContextProvider = (props) => {
    const [rooms, setRooms] = useState(null);
    const [current, setCurrent] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/data/api/roomData.json")
            .then((response) => response.json())
            .then((result) => {
                setRooms(result.rooms)
            });
    }, []);
    return (
        <RoomContext.Provider value={{ rooms, current, setCurrent }}>
            {props.children}
        </RoomContext.Provider>
    );
};

export default RoomContextProvider;