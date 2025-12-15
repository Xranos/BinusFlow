import ModalOverlay from "./modalOverlay"

type DeleteAllTaskModalProps = {
    onClose: () => void;
};

function DeleteAllTaskModal({ onClose }: DeleteAllTaskModalProps) {
    return (
        <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-180  rounded-xl p-4 flex flex-col items-center gap-15 ">
                <h1 className="text-[#F5F1DC] text-lg mt-8">
                    Are you sure you want to delete all the tasks?
                    <span className="text-[#F24545]"> this action will delete all existing tasks</span>
                </h1>
                <div className="flex items-center ml-auto p-2 gap-5 ">
                    <button className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50"
                        onClick={onClose}>Cancel</button>

                    <button className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 ">Delete</button>
                </div>
            </div>
        </ModalOverlay>
    )
}

export default DeleteAllTaskModal

