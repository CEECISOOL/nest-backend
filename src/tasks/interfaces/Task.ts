import { Document } from "mongoose";

export interface Task extends Document {
    id?: number; //signo ? para decirle que es opcional 
    title: string;
    description: string;
    done: boolean;
}