import type { Color } from "../interfaces"

interface colorBoxProps {
    color: Color;
    onDelete: () => void
}

function ColorBox({ color, onDelete }: colorBoxProps) {
    return (
        <div >
            <div
                className="relative w-22 h-22"
                style={{ backgroundColor: color.hex }}>
                <button
                    className="absolute -top-3.5 -right-3 w-7 h-7 bg-red-400 rounded-full border border-black hover:brightness-125 transition-all duration-200"
                    onClick={onDelete}>
                </button>
            </div>
        </div>

    )
}

export default ColorBox