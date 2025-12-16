import type { Color } from "../interfaces";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ColorContextType {
    colors: Color[]
    addColor: (hex: string) => void;
    deleteColor: (colorId: number) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);


export function ColorProvider({ children }: { children: ReactNode }) {
    const [colors, setColors] = useState<Color[]>([
        { colorId: 1, hex: "#FF5733" },
        { colorId: 2, hex: "#33FF57" },
        { colorId: 3, hex: "#3357FF" },
        { colorId: 4, hex: "#FFFFFF" },
    ]);

    const addColor = (hex: string) => {

    }

    const deleteColor = (colorId: number) => {

    }

    return (
        <ColorContext.Provider value={{ colors, addColor, deleteColor }}>
            {children}
        </ColorContext.Provider>
    )
}
