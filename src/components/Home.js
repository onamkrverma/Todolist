import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import TaskItems from './TaskItems';


const Home = () => {
  // get data from local storage 
  const getData = () => {
    let list = localStorage.getItem("list");

    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  }

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(getData);

  // add task in tasklist
  const handelOnChange = (e) => {
    setTask(e.target.value);
  }

  const addTask = () => {
    if (task) {
      setTaskList([...taskList, task]);
      setTask("");
    } else {
      console.log("enter task");
    }

  }
  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((e, index) => {
      return id !== index
    })
    setTaskList(updatedTasks);
  }

  const deleteAllTask = () => {
    setTaskList([]);
  }



  // save data on local storage 
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(taskList))
  }, [taskList])


  const [checkedTasks, setCheckedTasks] = useState([]);
  const onCheckBox = (e) => {
    if (e.target.checked) {
      setCheckedTasks([...checkedTasks, e.target.value]);
    } else {
      setCheckedTasks(checkedTasks.filter((element) => element !== e.target.value));
    }

  }

  const completeClick = () => {
    console.log("completed tasks", checkedTasks);

  }

  const activeClick = () => {
    const activeTasks = taskList.filter((element) => !checkedTasks.includes(element))
    console.log("Active tasks", activeTasks)
  }

  return (
    <div className="container">
      <div className="innerContainer">
        <div className="navBar">
          <div className="heading">
            <h1>To-do</h1>
          </div>
          <ul>
            <li><Link to="/" >All</Link></li>
            <li><Link to="/active" >Active</Link></li>
            <li><Link to="/completed">Completed</Link></li>
          </ul>
        </div>
        <div className="addTask">
          <input type="text" placeholder=' add details' value={task} onChange={handelOnChange} />
          <button className='addButton' onClick={addTask}>Add</button>
        </div>

        {taskList.map((element, index) => {
          return (
            <TaskItems element={element} key={index} index={index} onCheckBox={onCheckBox} deleteTask={deleteTask} deleteAllTask={deleteAllTask} />
          )
        })
        }

        {taskList.length ?
        <div className="deleteAll">
          <button className='deleteAllBtn' onClick={deleteAllTask}><i className="fa-regular fa-trash-can"></i>Delete All</button>
        </div> : "0 Task"
        }


        <div className="btn">
          <p>(👇buttons output will display on console) </p>
          <button className='activeBtn' onClick={activeClick}>Active Tasks</button>
          <button className='completeBtn' onClick={completeClick} >Completed Tasks </button>
        </div>

      </div>
    </div>
  )
}

export default Home