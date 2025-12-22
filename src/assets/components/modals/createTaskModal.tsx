import { useState } from "react";
import ModalOverlay from "./modalOverlay"
import { useTasks } from "../../context/taskContext";
import { useColors } from "../../context/colorContext";


type CreateTaskModalProps = {
    onClose: () => void;
};

function CreateTaskModal({ onClose }: CreateTaskModalProps) {
    const { addTask } = useTasks();
    const { colors } = useColors();

    const [status, setStatus] = useState('To Do');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]?.hex || "#DE35A6");
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleSave = () => {
        if (!title.trim()) {
            alert("Title Must Not Be Empty!");
            return;
        }

        addTask({
            title: title.trim(),
            description: description.trim(),
            status,
            color: selectedColor
        })

        onClose();
    }

    return (
        <ModalOverlay onClose={onClose}>
            <div className="bg-[#001BB7] w-275  rounded-xl p-4  flex flex-col ">
                <div className="flex gap-7 text-center ml-auto pr-30 pt-10">
                    <div className="flex gap-4 flex-none">
                        <h1 className="text-[#F5F1DC] text-lg">Status</h1>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="bg-[#F5F1DC] rounded-xl w-60 "
                        >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="flex gap-4 items-center relative">
                        <h1 className="text-[#F5F1DC] text-lg">Color</h1>
                        <div
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            className="bg-[#DE35A6]  w-8 h-8 "
                            style={{backgroundColor: selectedColor}}
                        >
                        </div>
                            {showColorPicker && (
                                <div className="absolute top-10 left-15 w-30  bg-[#F5F1DC] p-2 ">
                                    <div className="grid grid-cols-5 gap-2">
                                        {colors.map((color) =>(
                                            <div 
                                            key={color.colorId}
                                            onClick={() => {
                                                setSelectedColor(color.hex);
                                                setShowColorPicker(false);
                                            }}
                                            className={`w-4 h-4 cursor-pointer`}
                                            style={{backgroundColor: color.hex}}
                                            >

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                    </div> 
                </div>

                <div className="flex flex-col gap-4 pl-10 pr-10">
                    <h1 className="text-[#F5F1DC] text-lg ">Title</h1>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-[#F5F1DC] text-[#1D1D1D] text-lg rounded-xl w-205 h-12 p-2"
                    />

                    <h1 className="text-[#F5F1DC] text-lg ">Description</h1>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-[#F5F1DC] text-[#1D1D1D] h-80 text-lg rounded-xl w-full p-2 resize-none"
                    />
                </div>

                <div className="flex items-center ml-auto pr-3 pt-5 gap-5 ">
                    <button
                        onClick={onClose}
                        className="bg-[#F34646] text-[#F5F1DC] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        disabled={!title.trim()}
                        className="bg-[#F5F1DC] text-[#001BB7] text-lg rounded-xl px-10 py-2 transition duration-200 hover:brightness-50 cursor-pointer "
                    >
                        Save
                    </button>
                </div>
            </div>
        </ModalOverlay>
    )
}



export default CreateTaskModal