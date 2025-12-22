import { useState} from 'react';
import type { Task as TaskType } from '../interfaces';

import DeleteTaskModal from './modals/deleteTaskModal';
import ViewTaskModal from './modals/viewTaskModal';

type TaskNoteProps = {
    task: TaskType;
    onDragStart: (taskId: number) => void
}

function TaskNote({ task, onDragStart }: TaskNoteProps) {
    const [isClicked, setIsClicked] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isViewOpen, setIsViewOpen] = useState(false);

    const handleClick = () => {
       if (isClicked) {
            setIsViewOpen(true);
        }
        else {
            setIsClicked(true);
        }
    }

    return (
        <>
            <div
                draggable
                onDragStart={() => onDragStart(task.taskId)}
                onClick={handleClick}
                className={`relative h-35 w-35 p-2 shadow-lg flex items-center
            transition-all duration-200 
            ${isClicked ? 'scale-110 z-10' : 'hover:scale-100'}`}
                style={{ background: `${task.color}` }}
            >
                {isClicked && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDeleteOpen(true);
                        }}
                        className="absolute -top-3.5 -right-3 w-7 h-7 bg-red-400 rounded-full border border-black hover:brightness-125 transition-all duration-200  cursor-pointer" 
                    >
                    </button>
                )}

                <p className="line-clamp-3 break-all text-2xl">
                    {task.title}
                </p>
            </div>
            {isDeleteOpen && (
                <DeleteTaskModal
                    taskId={task.taskId}
                    title={task.title}
                    onClose={() => {
                        setIsDeleteOpen(false)
                        setIsClicked(false);
                        
                    }}

                />
            )}

            {isViewOpen && (
                <ViewTaskModal
                    status={task.status}
                    title={task.title}
                    description={task.description}
                    onClose={() => {
                        setIsViewOpen(false)
                        setIsClicked(false);
                    }}
                />
            )}
        </>

    )
}

export default TaskNote