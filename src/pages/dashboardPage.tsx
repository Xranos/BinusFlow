import Taskboard from "../assets/components/taskboard"
import Toolbar from "../assets/components/toolbar"

import { TiFlashOutline } from "react-icons/ti";
import { FaRunning } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function DashboardPage() {
    return (
        <div>
            <div className="pr-10 pl-10 pt-4">
                <Toolbar />
            </div>
            <div className="grid grid-cols-3 gap-40 pt-5 pl-10 pr-10">
                <Taskboard Icon={<TiFlashOutline/>} title="To Do" />
                <Taskboard Icon={<FaRunning />}title="In Progress"/>
                <Taskboard Icon={<FaCheck />} title="Done"/>
            </div>
        </div>
    )
}

export default DashboardPage