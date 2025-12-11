import { Link } from "react-router-dom";
import { useState } from "react";

import { FaStickyNote } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaLeftLong } from "react-icons/fa6";
import { FaRightLong } from "react-icons/fa6";

function Sidebar() {
    const [isMinimized, setIsMinimized] = useState(true);
    return (
        <aside className={`h-screen p-2 transition-all duration-300 ${isMinimized ? 'w-20' : 'w-64'}`}>
            <nav className="h-full flex flex-col bg-[#001BB7] rounded-md gap-5">
                <div className="flex justify-between gap-4 items-center">
                    {!isMinimized ? (
                        <div>
                            <h1 className="text-3xl text-white flex items-center gap-2  pl-7 pt-4">
                                <FaStickyNote /> BinusFlow
                            </h1>
                        </div>
                    ) : (
                        <div className="text-3xl text-white gap-2 flex items-center px-4 pt-4">
                            <FaStickyNote />
                        </div>
                    )}
                    <button onClick={() => setIsMinimized(!isMinimized)} className={`text-white rounded-2xl  ${isMinimized ? 'absolute left-12 top-3' : ''}`}>
                        {isMinimized ? <FaRightLong className="bg-[#0046FF] hover:bg-[#001BB7] transition-colors duration-300 text-3xl rounded-2xl m-2 p-1 " />
                            :
                            <FaLeftLong className="bg-[#0046FF] hover:bg-[#001BB7] transition-colors duration-300 text-3xl rounded-2xl m-2 p-1" />}
                    </button>
                </div>

                {!isMinimized && (
                    <ul className="flex flex-col gap-6 px-5 text-white">
                        <li className="flex gap-2 items-center ">
                            <IoMdHome className="text-3xl" />
                            <Link to="/" className="flex-1 text-2xl  gap-2 hover:bg-[#0046FF] transition-colors duration-300 rounded-2xl p-2">
                                Home
                            </ Link>
                        </li>
                        <li className="flex gap-2 items-center ">
                            <IoIosSettings className="text-3xl" />
                            <Link to="/config" className="flex-1 text-2xl gap-2 hover:bg-[#0046FF] transition-colors duration-300 rounded-2xl p-2">
                                Configuration
                            </ Link>
                        </li>
                    </ul>
                )}

                {isMinimized && (
                    <ul className="flex flex-col gap-6 px-5 text-white items-center  ">
                        <li>
                            <Link to="/" className="block hover:bg-[#0046FF] transition-colors duration-300 rounded-3xl p-2" >
                                <IoMdHome className="text-3xl" />
                            </ Link>
                        </li>
                        <li>
                            <Link to="/config" className="block hover:bg-[#0046FF] transition-colors duration-300 rounded-3xl p-2" >
                                <IoIosSettings className="text-3xl" />
                            </ Link>

                        </li>
                    </ul>
                )}

            </nav>
        </aside>
    )
}

export default Sidebar

