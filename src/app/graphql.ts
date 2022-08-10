import { gql } from 'apollo-angular';

export const ALLDATA_QUERY = gql`query {
    allData{
        id,
        title,
        todos {
            id,
            text,
            isCompleted,
            taskID
        }
    }
}`;

export const CREATETASK_MUTATION = gql`mutation createTask($data: DataInput!) {
    createTask(data: $data) {
        id,
        title,
        todos {
            id,
            text,
            isCompleted,
            taskID
        }
    }
}`;

export const UPDATETODO_MUTATION = gql`mutation createToDo($todoID: Int!) {
    changeCheckCompleted(todoID: $todoID) {
        id,
        text,
        isCompleted,
        taskID
    }
}`;