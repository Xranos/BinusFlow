import { use, useState } from "react";
import Taskboard from "../assets/components/taskboard"
import Toolbar from "../assets/components/toolbar"
import CreateTaskModal from "../assets/components/modals/createTaskModal";
import AddColorModal from "../assets/components/modals/addColorModal";

import { useTasks } from "../assets/context/taskContext";

import { TiFlashOutline } from "react-icons/ti";
import { FaRunning } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function DashboardPage() {
    const { tasks, updateTask } = useTasks();

    tasks.forEach((task, index) => {
        console.log(`Task ${index}:`, {
            id: task.taskId,
            title: task.title,
            status: task.status,
            statusType: typeof task.status
        });
    });

    const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleDragStart = (taskId: number) => {
        setDraggedTaskId(taskId);
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    }

    const handleDrop = (newStatus: string) => {
        if (draggedTaskId !== null) {
            updateTask(draggedTaskId, { status: newStatus });
            setDraggedTaskId(null);
        }
    };

    const todoTasks = tasks.filter(task => task.status === 'toDo');
    const inProgressTasks = tasks.filter(task => task.status === 'inProgress');
    const doneTasks = tasks.filter(task => task.status === 'done');

    return (
        <div>
            <div className="pr-10 pl-20 pt-4">
                <Toolbar />
            </div>
            <div className="grid grid-cols-3 gap-25 pt-5 pl-10 pr-10">
                <Taskboard
                    Icon={<TiFlashOutline />}
                    title="To Do"
                    status="toDo"
                    tasks={todoTasks}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />

                <Taskboard
                    Icon={<FaRunning />}
                    title="In Progress"
                    status="inProgress"
                    tasks={inProgressTasks}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />

                <Taskboard
                    Icon={<FaCheck />}
                    title="Done"
                    status="done"
                    tasks={doneTasks}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />
            </div>
            {showModal && (
                <CreateTaskModal onClose={() => setShowModal(false)} />
            )}
        </div>
    )
}

export default DashboardPage