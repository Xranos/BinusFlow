import type { Color } from "../interfaces"

interface colorBoxProps{
    color: Color;
    onDelete : () => void
}

function ColorBox({color, onDelete}: colorBoxProps){
    return (
        <div >
            <div className="w-22 h-22" style={{backgroundColor: color.hex}}>
                <button className="absolute -top-2 -right-2 w-3 h-3 bg-red-400 rounded-full" onClick={onDelete}></button>
            </div>
        </div>
        
    )
}

export default ColorBox