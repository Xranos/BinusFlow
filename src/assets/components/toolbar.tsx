import { useState } from "react";
import CreateTaskModal from "./modals/createTaskModal";

import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRunning } from "react-icons/fa";

type CreateTaskModalProps = {
    onClose: () => void;
};

function Toolbar() {
    const [isCreateOpen, setIsCreateOpen] = useState(false);


    return (
        <>
            <header className="h-20 bg-[#F5F1DC] rounded-3xl flex items-center justify-between" >
                <div className="flex items-center gap-5 ml-auto pr-10 ">
                    <input type="text" placeholder="Search..." className=" w-250 h-12 px-4 py-2 rounded-4xl text-[#F5F1DC] bg-[#0046FF] 
                placeholder:text-[#F5F1DC] focus:outline-white focus:outline-1" />
                    <div className="block text-[#F5F1DC] text-5xl flex gap-5">
                        <IoMdAdd className="bg-[#0046FF] hover:bg-[#3D72FF] transition-colors duration-300 rounded-3xl p-2"
                            onClick={() => setIsCreateOpen(true)} />
                        <FaTrash className="bg-[#0046FF] hover:bg-[#3D72FF] transition-colors duration-300 rounded-3xl p-2" />
                    </div>
                </div>
            </header>

            {isCreateOpen && (<CreateTaskModal onClose={() => setIsCreateOpen(false)} />)}
        </>
    )
}

export default Toolbar