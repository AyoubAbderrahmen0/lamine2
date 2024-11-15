

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getAllTask } from '../redux/Actions/TaskAction';
import TaskCard from './TaskCard';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

const TaskList = () => {
    const dispatch = useDispatch();
    const  taskList = useSelector(state => state.TaskReducer.tasks)
    const [show, setShow] = useState(false);
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Duration, setDuration] = useState(0);
    const [AssignedTo, setAssignedTo] = useState("");
    const [Status, setStatus] = useState("");

    console.log(taskList)

    useEffect(()=>{
        dispatch(getAllTask());

    },[])
    const handleShow = ()=> setShow(true);
    const handleClose = ()=> setShow(false);
    const handleClick= ()=>{
      dispatch(addTask(
        {name:Name, description:Description, status:Status, duration: Duration, isDone:false, assignedTo:AssignedTo

        } )
      )
      handleClose()
    }
  return (
    <div>
 <Button variant="primary" onClick={handleShow} className="mb-3">
                Add New Task
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text> Task Name </InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Task name"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Description</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter your Task description"
                            />
                        </InputGroup>
                       
                        <InputGroup className="mb-3">
                            <InputGroup.Text> Status</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setStatus(e.target.value)}
                                placeholder="Enter status  "
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text> AssignedTo</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setAssignedTo(e.target.value)}
                                placeholder="Enter the name of the person  assigned to the task"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Duration</InputGroup.Text>
                            <Form.Control
                                onChange={(e) => setDuration(e.target.value)}
                                placeholder="Enter duration to take "
                            />
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Register Task 
                    </Button>
                </Modal.Footer>
            </Modal>
      TaskList
        {taskList.map((task)=> <TaskCard key={task._id} task={task} />  )}
        
    </div>
    
  )
}

export default TaskList