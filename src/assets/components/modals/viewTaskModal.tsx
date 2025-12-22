import { useState } from "react";
import ModalOverlay from "./modalOverlay"

type ViewTaskModalProps = {
    status: string;
    title: string;
    description: string;

    onClose: () => void;
};

function ViewTaskModal({ status, title, description, onClose }: ViewTaskModalProps) {
    return (
        <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-275  rounded-xl p-4  flex flex-col ">
                <div className="flex gap-7 text-center ml-auto pr-30 pt-10">
                    <div className="flex gap-4 flex-none pr-40">
                        <h1 className="text-[#F5F1DC] text-lg text-center">Status</h1>
                        <input
                            type="text"
                            value={status}
                            readOnly
                            className="bg-[#F5F1DC] text-[#001BB7] font-medium rounded-xl w-50 pl-10  "
                        >
                        </input>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pl-10 pr-10">
                    <h1 className="text-[#F5F1DC] text-lg ">Title</h1>
                    <input
                        type="text"
                        value={title}
                        readOnly
                        className="bg-[#F5F1DC] text-[#1D1D1D] text-lg rounded-xl w-205 h-12 p-2"
                    />

                    <h1 className="text-[#F5F1DC] text-lg ">Description</h1>
                    <textarea
                        value={description}
                        readOnly
                        className="bg-[#F5F1DC] text-[#1D1D1D] h-80 text-lg rounded-xl w-full p-2 resize-none"
                    />
                </div>

                <div className="flex items-center ml-auto pr-3 pt-5 gap-5 ">
                    <button
                        onClick={onClose}
                        className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer"
                    >
                        Close
                    </button>


                </div>
            </div>
        </ModalOverlay>
    )
}

export default ViewTaskModal