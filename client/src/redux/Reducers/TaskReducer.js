const { LOAD_TASKS,
    ADD_TASK,
    GET_TASK_BY_ID,
    GET_ALL_TASKS,
    DELETE_TASK,
    UPDATE_TASK,
    ERROR_TASK } = require("../ActionTypes/ActionTypes");


const initialState = {
    loading: false,
    tasks: [],
    error: null,
    currentTask: null,
};

const TaskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_TASKS:
            return { ...state, load: true }
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, payload.newTask], loading: false };
        case GET_TASK_BY_ID:
            return { ...state, currentTask: payload.task, loading: false };
        case GET_ALL_TASKS:
            return { ...state, tasks: payload, loading: false };
        case DELETE_TASK:
            return { ...state, tasks: payload.TaskList, loading: false };
        case UPDATE_TASK:
            return { ...state, tasks: payload.TaskList, loading: false };
        case ERROR_TASK:
            return { ...state, error: payload, loading: false };
        default:
            return state;
    }
};

export default TaskReducer;