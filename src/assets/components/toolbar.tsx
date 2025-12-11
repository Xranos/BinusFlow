import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRunning } from "react-icons/fa";

import SearchBar from "./searchbar";

function Toolbar() {
    return (
        <header className="h-20 bg-[#F5F1DC] rounded-3xl flex items-center justify-between" >
            <div className="flex items-center gap-5 ml-auto pr-10 ">
                <input type="text" placeholder="Search..." className=" w-250 h-12 px-4 py-2 rounded-4xl text-white bg-[#0046FF] 
                placeholder:text-white focus:outline-white focus:outline-1" />
                <div className="block text-white text-5xl flex gap-5">
                    <IoMdAdd className="bg-[#0046FF] hover:bg-[#001BB7] transition-colors duration-300 rounded-3xl p-2" />
                    <FaTrash className="bg-[#0046FF] hover:bg-[#001BB7] transition-colors duration-300 rounded-3xl p-2" />
                </div>
            </div>


        </header>
    )
}

export default Toolbar