export interface Task{
    taskId: number;
    title: string;
    description : string;
    status: "To Do" | "In Progress" | "Done";
    color: string;
}

export interface Color{
    colorId: number;
    hex: string;
}