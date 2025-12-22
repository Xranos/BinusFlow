import ModalOverlay from "./modalOverlay"
import { useTasks } from "../../context/taskContext";

type DeleteAllTaskModalProps = {
    onClose: () => void;
};

function DeleteAllTaskModal({ onClose }: DeleteAllTaskModalProps) {
    const { deleteAllTasks, tasks } = useTasks();

    const handleDeleteAll = () => {
        if (tasks.length === 0) {
            alert("There is no task to be deleted!");
            return;
        }

        deleteAllTasks();
        console.log("All tasks have been deleted.");
        onClose();
    }

    return (
        <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-180  rounded-xl p-4 flex flex-col items-center gap-15 ">
                <h1 className="text-[#F5F1DC] text-lg mt-8">
                    Are you sure you want to delete all the tasks?
                    <span className="text-[#F24545]"> this action will delete all existing tasks</span>
                </h1>
                <div className="flex items-center ml-auto p-2 gap-5 ">
                    <button className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer"
                        onClick={onClose}>Cancel</button>

                    <button
                        onClick={handleDeleteAll}
                        className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer "
                    >
                        Delete
                    </button>
                </div>
            </div>
        </ModalOverlay >
    )
}

export default DeleteAllTaskModal

