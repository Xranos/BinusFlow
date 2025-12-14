import ModalOverlay from "./modalOverlay"

type CreateTaskModalProps = {
    onClose: () => void;
};

function CreateTaskModal({ onClose }: CreateTaskModalProps) {
    return (
        <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-275  rounded-xl p-4  flex flex-col ">
                <div className="flex gap-7 text-center ml-auto pr-30 pt-10">
                    <div className="flex gap-4 flex-none">
                        <h1 className="text-[#F5F1DC] text-lg">Status</h1>
                        <select name="statusDropDown" id="statusDrop" className="bg-[#F5F1DC] rounded-xl w-60 ">
                            <option value="toDo">To Do</option>
                            <option value="inProgress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <div className="flex gap-4 items-center">
                        <h1 className="text-[#F5F1DC] text-lg">Color</h1>
                        <div className="bg-[#DE35A6]  w-8 h-8 "></div>
                    </div>
                </div>
                    
                <div className="flex flex-col gap-4 pl-10 pr-10">
                    <h1 className="text-[#F5F1DC] text-lg ">Title</h1>
                    <input type="text" className="bg-[#F5F1DC] text-[#1D1D1D] text-lg rounded-xl w-205 h-12 p-2" />

                    <h1 className="text-[#F5F1DC] text-lg ">Description</h1>
                    <textarea className="bg-[#F5F1DC] text-[#1D1D1D] h-80 text-lg rounded-xl w-full p-2 resize-none"/>
                </div>

                <div className="flex items-center ml-auto pr-3 pt-5 gap-5 ">
                    <button className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50">Cancel</button>
                    <button className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 ">Save</button>
                </div>
            </div>
        </ModalOverlay>
    )
}



export default CreateTaskModal