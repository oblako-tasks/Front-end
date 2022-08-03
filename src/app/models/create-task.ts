import { Todo } from "./todo";

export class CreateTask {
    task: {
        id?: number;
        title: string;
    } | undefined;
    todos: Todo | undefined;
}