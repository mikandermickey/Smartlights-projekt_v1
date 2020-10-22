import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const RoomContextProvider = (props) => {
    const [room, setRoom] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3000/data/api/roomData.json")
            .then((response) => response.json())
            .then((result) => {
                setRoom(result.room);
            });
    }, []);
    return (
        <UserContext.Provider value={{ room }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default RoomContextProvider;