import { useContext } from "react";
import { TaskContext } from "./taskContext";

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) throw new Error("error using taskcontext");
    return context
}