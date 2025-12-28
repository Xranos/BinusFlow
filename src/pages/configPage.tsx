import { useState } from "react"
import { useColors } from "../assets/context/colorContext";

import ColorBox from "../assets/components/colorBox";

import { IoMdAdd } from "react-icons/io";
import AddColorModal from "../assets/components/modals/addColorModal";

function ConfigPage() {
    const { colors, addColor, deleteColor } = useColors();
    const [showModal, setShowModal] = useState(false);

    const handleSaveColor = (hex: string) => {
        addColor({ hex });
    }
    return (
        <>
            <div className="px-10 pt-5">
                <div className="bg-[#F5F1DC] rounded-2xl flex items-start justify-start h-[95vh] max-h-[95h] w-full overflow-hidden min-h-0">
                    <div className="flex flex-col p-7 gap-5 h-full min-h-0">
                        <h1 className="text-[#F5F1DC] text-5xl bg-[#FF8040] rounded-md p-5 w-fit ">
                            This is configuration page
                        </h1>
                        <div className="pl-4 flex flex-col gap-3 h-full">
                            <h2 className="text-[#535353] text-3xl pt-5 ">
                                Color List
                            </h2>
                            <div className="bg-[#FF8040] h-full w-225 rounded-md px-8 pt-15 overflow-y-auto">
                                <div className="grid grid-cols-8 gap-4">
                                    {colors.map((color) => (
                                        <ColorBox
                                            key={color.colorId}
                                            color={color}
                                            onDelete={() => deleteColor(color.colorId)} />
                                    ))}
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="w-22 h-22 bg-gradient-to-b from-[#011587] via-[#001BB7] to-[#0224EA]
                                         text-white flex items-center justify-center 
                                         hover:from-[#3D72FF] hover:via-[#3D72FF] hover:to-[#3D72FF] transition-colors duration-300 cursor-pointer "
                                    >
                                        <span className="flex flex-col items-center px-1">
                                             <IoMdAdd className="text-5xl font-bold" />
                                             <h2 className="text-white">Add Color</h2>
                                        </span>
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                showModal && (
                    <AddColorModal
                        onClose={() => setShowModal(false)}
                        onSave={handleSaveColor}
                    />
                )
            }
        </>


    )
}

export default ConfigPage