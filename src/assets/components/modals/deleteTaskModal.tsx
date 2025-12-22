import ModalOverlay from "./modalOverlay"
import { useTasks } from "../../context/taskContext";



type DeleteTaskModalProps = {
    taskId: number;
    title: string;
    onClose: () => void;
};

function DeleteTaskModal({ taskId, title, onClose }: DeleteTaskModalProps) {
    const { deleteTask } = useTasks();

    const handleDelete = () => {
        deleteTask(taskId);
        console.log(`Task with ID ${taskId} has been deleted.`);
        onClose();
    }

    console.log("DeleteTaskModal received:", {
    taskId,
    title,
});

    return (
        <div>
            <ModalOverlay onClose={onClose}>
                <div className="bg-[#001BB7] w-180  rounded-xl py-4 px-10 ml-auto flex flex-col gap-5 ">
                    <h1 className="text-[#F5F1DC] text-lg mt-8 ">
                        Are you sure you want to delete this task?
                    </h1>

                    <input
                        type="text"
                        readOnly
                        value={title}
                        className="bg-[#F5F1DC] text-[#1D1D1D] text-lg rounded-xl w-160 h-12 p-2" />

                    <div className="flex items-center ml-auto p-2 gap-5 ">
                        <button className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer"
                            onClick={onClose}>Cancel</button>

                        <button
                            onClick={handleDelete}
                            className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer "
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </ModalOverlay >
        </div>
    )
}

export default DeleteTaskModal