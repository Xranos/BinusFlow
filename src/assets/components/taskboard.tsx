import type { Task as TaskType } from "../interfaces";
import Task from "./taskNote";

type Props = {
    title?: React.ReactNode;
    Icon?: React.ReactNode;
    status: string;
    tasks: TaskType[];
    onDragStart: (taskId: number) => void;
    onDrop: (status: string) => void;
    onDragOver: (e: React.DragEvent) => void;
};

function Taskboard({ title = "TaskBoard", Icon, status, tasks, onDragStart, onDrop, onDragOver }: Props) {
    return (
        <div className="flex-none">
            <div
                onDragOver={onDragOver}
                onDrop={() => onDrop(status)}
                className="bg-[#F5F1DC] h-[83vh] max-h-[83h] w-full rounded-lg flex flex-col"
            >
                <div className="flex text-[#001BB7] gap-5 p-5 items-center justify-center">
                    <span className="text-4xl text-black">
                        {Icon}
                    </span>
                    <span className="text-3xl ">{title}</span>
                </div>

                <div className="flex-1 w-full overflow-y-auto px-4 py-2 flex items-start justify-center">
                    <div className="mx-auto grid grid-cols-[auto_auto] gap-x-10 gap-y-5 ">
                        {tasks.map((task) => (
                            <Task
                                key={task.taskId}
                                task={task}
                                onDragStart={onDragStart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taskboard