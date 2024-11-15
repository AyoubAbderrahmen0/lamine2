import axios from "axios";
import { ADD_TASK, DELETE_TASK, ERROR_TASK, GET_ALL_TASKS, GET_TASK_BY_ID, LOAD_TASKS, UPDATE_TASK } from "../ActionTypes/ActionTypes";


export const addTask = (newTask) => async (dispatch) => {
    dispatch({ type: LOAD_TASKS });
    try {
        const response = await axios.post("http://localhost:8000/api/task/addTask", newTask);
        dispatch({
            type: ADD_TASK,
            payload: response.data /* response.data = { msg , newTask} */
        });
    } catch (error) {
        dispatch({
            type: ERROR_TASK,
            payload: error
        })
    }
};

export const getTaskById = (_id) => async (dispatch) => {
    dispatch({ type: LOAD_TASKS })
    try {
        const response = await axios.get(`http://localhost:8000/api/task/getTaskById/${_id}`);
        dispatch({
            type: GET_TASK_BY_ID,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR_TASK,
            payload: error
        })
    }
}

export const getAllTask = () => async (dispatch) => {
    dispatch({ type: LOAD_TASKS })
    try {
        
        const response = await axios.get(`http://localhost:8000/api/task/getAllTasks`);
        console.log("malek")
        dispatch({
            type: GET_ALL_TASKS,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: ERROR_TASK,
            payload: error
        })
    }
};

export const deleteTask = (_id) => async (dispatch) => {
    dispatch({ type: LOAD_TASKS })
    try {
        const response = await axios.delete(`http://localhost:8000/api/task/deleteTask/${_id}`);
        dispatch({
            type: DELETE_TASK,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: ERROR_TASK,
            payload: error
        })
    }
};

export const updateTask = ({_id, updatedTask}) => async (dispatch) => {
    dispatch({ type: LOAD_TASKS })
    try {
        const response = await axios.put(`http://localhost:8000/api/task/updateTask/${_id}`, updatedTask);
        dispatch({
            type: UPDATE_TASK,
            payload: response.data,
            })
    } catch (error) {
        dispatch({
            type: ERROR_TASK,
            payload: error
        })
    }
};
