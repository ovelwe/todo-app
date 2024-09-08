import { ReactNode } from "react";

export interface ITodo {
    id: number
    task: string
    isCompleted: boolean
    onUpdate: () => void
    className?: string;
    children?: ReactNode;
}