export interface ITask { 
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "all" | "high" | "medium" | "low",
    userId: string | null;
}

export interface IUser { 
    id: string,
    name: string
}