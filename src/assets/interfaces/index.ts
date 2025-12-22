export interface Task{
    taskId: number;
    title: string;
    description : string;
    status: "toDo" | "inProgress" | "done";
    color: string;
}

export interface Color{
    colorId: number;
    hex: string;
}