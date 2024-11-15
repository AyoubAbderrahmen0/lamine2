import React from 'react'
import './TaskCard.css'
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../redux/Actions/TaskAction';

const TaskCard = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
    dispatch( deleteTask(id))
  }
  const handleEdit = ()=>{
    dispatch( updateTask({ isDone:!props.task.isDone , _id:props.task._id}))
  }
  return (
    <div>
              <table className="table">
            <thead>
                <tr className="tr">
                    <th className="th">{props.task.name}</th>
                    <th className="th">{props.task.description}</th>
                    <th className="th">{props.task.duration}</th>
                    <th className="th">{props.task.status}</th>
                    <button onClick={()=> handleDelete(props.task._id)} >Delete</button>
                    <button  onClick={()=> handleEdit()} >Edit </button>
                   </tr>
            </thead>


        </table>
    </div>
  )
}

export default TaskCard