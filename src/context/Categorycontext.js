"use client"

import { createContext, useState } from "react";

export const Categorycontext = createContext();

export const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState("");
    const changeCategory = (cat) => {
        setCategory(cat);
    }

    return (
        <Categorycontext.Provider value={{ category, changeCategory }}>
            {children}
        </Categorycontext.Provider>
    )

}

export default Categorycontext