import  {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
import type { Task } from "../interfaces";

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Omit<Task, 'taskId'>) => void;
    deleteTask: (taskId: number) => void;
    updateTask: (taskId: number, updateTask: Partial<Task>) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({children}: {children: ReactNode}) {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextId, setNextId] = useState(1);

    const addTask = (task: Omit<Task, 'taskId'>) =>{
        const newTask: Task = {...task, taskId:nextId};
        setTasks([...tasks, newTask]);
        setNextId(nextId+1);
    }

    const deleteTask = (taskId: number) =>{
        setTasks(tasks.filter(task => task.taskId !== taskId));
    }

    const updateTask = (taskId: number, updateTask: Partial<Task>) =>{
        setTasks(tasks.map(task => task.taskId === taskId ? {... task, ...updateTask} : task))
    }

    return(
        <TaskContext.Provider value={{tasks, addTask, deleteTask, updateTask}}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) throw new Error("error using taskcontext");
    return context
}