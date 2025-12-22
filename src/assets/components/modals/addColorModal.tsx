import { useState } from "react";
import ModalOverlay from "./modalOverlay"

type AddColorProps = {
    onClose: () => void;
    onSave: (hex: string) => void;
};

function AddColorModal({ onClose, onSave }: AddColorProps) {
    const [colorHex, setColorHex] = useState('');
    const hexIsValid = (hex: string) => /^#[0-9A-F]{6}$/i.test(hex);

    return (
        <div>
            <ModalOverlay>
                <div className="bg-[#001BB7] w-210  rounded-xl p-4  ">
                    <div className="flex gap-4 text-left pl-10 flex flex-col">
                        <div className="flex flex-col gap-4 ">
                            <h1 className="text-[#F5F1DC] text-lg ">Color</h1>
                            <input
                                type="text"
                                value={colorHex}
                                onChange={(e) => setColorHex(e.target.value.toUpperCase())}
                                placeholder="#A020F0"
                                className="bg-[#F5F1DC] text-[#1D1D1D] text-lg rounded-xl w-150 h-12 p-2"
                            />
                        </div>
                        <div>
                            <h1 className="text-[#F5F1DC] text-lg ">Preview</h1>
                            {hexIsValid(colorHex) ? (
                                <div className="w-50 h-50 rounded-xl"
                                    style={{ backgroundColor: colorHex }} />
                            ) : (
                                <div className="bg-[#FF8040] w-50 h-50 rounded-xl flex items-center justify-center ">
                                    <p className="text-[#001BB7] text-lg font-semibold ">No Preview Available</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex w-full justify-end pr-3 pt-40 gap-5 ">
                        <button
                            onClick={onClose}
                            className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer"
                        >Cancel
                        </button>

                        <button
                            onClick={() => {
                                if(hexIsValid(colorHex)){
                                    onSave(colorHex);
                                    onClose();
                                }
                            }}
                            disabled={!hexIsValid(colorHex)}
                            className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer ">
                            Save
                        </button>
                    </div>
                </div>
            </ModalOverlay>

        </div>
    )
}

export default AddColorModal