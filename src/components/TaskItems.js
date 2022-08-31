import React from 'react'

const TaskItems = (props) => {
    const { element, index, onCheckBox, deleteTask } = props
    return (
        <div className="taskList" key={index}>
            <input type="checkbox" className='checkbox' id={index} value={element} onChange={onCheckBox} />
            <label htmlFor="tasksList" id={index}>{element}</label>
            <button className='deleteBtn' onClick={() => deleteTask(index)}><i className="fa-regular fa-trash-can"></i></button>
        </div>
    )
}

export default TaskItems