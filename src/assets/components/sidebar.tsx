import { Link } from "react-router-dom";

import DashboardPage from "../../pages/dashboardPage";
import ConfigPage from "../../pages/configPage";

import { FaStickyNote } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { use } from "react";


function Sidebar() {
    // const location = useLocation();
    // const [isExpanded, setIsExpanded] = useState(true);
    return (
        <aside className="h-screen w-64 p-2 ">
            <nav className="h-full flex flex-col bg-gray-800 border rounded-md">
                <div className="justify-between items-center p-4">
                    <div className="items-center gap-2 ">
                        <h1 className="text-red-500 text-3xl p-4 gap-2 flex">
                            <FaStickyNote /> BinusFlow</h1>
                    </div>
                    <div className="flex flex-col justify-between items-left gap-5">
                        <span className="flex text-2xl text-white gap-2 m-2">
                            <IoIosSettings className="text-4xl" />
                            <div className="hover:bg-gray-700 rounded-md p-1 w-full">
                                <Link to="/">
                                    <h2>
                                        Home
                                    </h2>
                                </Link>
                            </div>
                        </span>
                        <span className="flex text-2xl text-white gap-2 m-2">
                            <IoMdHome className="text-4xl" />
                            <span className="hover:bg-gray-700 rounded-md p-1">
                                <Link to="/Config">
                                    <h2>
                                        Configuration
                                    </h2>
                                </Link>
                            </span>
                        </span>

                    </div>


                </div>

            </nav>
        </aside>
    )
}

export default Sidebar

