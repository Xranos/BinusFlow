import { Link, useLocation} from "react-router-dom";

import { FaStickyNote } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { use } from "react";


function Sidebar() {
    // const location = useLocation();
    // const [isExpanded, setIsExpanded] = useState(true);
    return (
        <aside className="h-screen">
            <nav className ="h-full flex flex-col bg-gray-800">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-2 ">
                    <h1 className="text-red-500 text-2xl p-2">BinusFlow</h1>

                    </div>
                    

                </div>
                
            </nav>
    


        </aside>
    )
}

export default Sidebar

