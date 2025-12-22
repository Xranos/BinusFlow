import { useState } from "react";
import Taskboard from "../assets/components/taskboard"
import Toolbar from "../assets/components/toolbar"
import CreateTaskModal from "../assets/components/modals/createTaskModal";

import { useTasks } from "../assets/context/taskContext";

import { TiFlashOutline } from "react-icons/ti";
import { FaRunning } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function DashboardPage() {
    const { tasks, updateTask } = useTasks();

    const [draggedTaskId, setDraggedTaskId] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')

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

    const filteredTask = tasks.filter(task => {
        const query = searchQuery.toLocaleLowerCase();
        return (
            task.title.toLowerCase().includes(query) || task.description.toLocaleLowerCase().includes(query)
        );
    });

    const todoTasks = filteredTask.filter(task => task.status === 'To Do');
    const inProgressTasks = filteredTask.filter(task => task.status === 'In Progress');
    const doneTasks = filteredTask.filter(task => task.status === 'Done');

    return (
        <div>
            <div className="pr-10 pl-20 pt-4">
                <Toolbar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />
            </div>
            <div className="grid grid-cols-3 gap-25 pt-5 pl-10 pr-10">
                <Taskboard
                    Icon={<TiFlashOutline />}
                    title="To Do"
                    status="To Do"
                    tasks={todoTasks}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />

                <Taskboard
                    Icon={<FaRunning />}
                    title="In Progress"
                    status="In Progress"
                    tasks={inProgressTasks}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                />

                <Taskboard
                    Icon={<FaCheck />}
                    title="Done"
                    status="Done"
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