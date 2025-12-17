import type { Color, Task } from "../interfaces";
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface ColorContextType {
    colors: Color[]
    addColor: (color: Omit<Color, 'colorId'>) => void;
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
    const [nextId, setNextId] = useState(5);

    const addColor = (color: Omit<Color, 'colorId'>) => {
        const newColor: Color = {...color, colorId:nextId};
        setColors([...colors, newColor]);
        setNextId(nextId+1);
    }

    const deleteColor = (colorId: number) => {
        setColors(colors.filter(color => color.colorId !== colorId))
    }

    return (
        <ColorContext.Provider value={{ colors, addColor, deleteColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export function useColors(){
    const context = useContext(ColorContext)
    if (!context) throw new Error("error using colorcontext");
    return context
}
