import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <>
            <li 
                className={`task ${task.reminder ? 'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.id)}>
                <p>
                    {task.text}
                </p>
                <p>
                    {task.day}
                </p>
                <FaTimes 
                    className='close'
                    style={styling} 
                    onClick={() => onDelete(task.id)} 
                />
            </li>
        </>
    );

}

const styling = {
    color: 'red',
    cursor: 'pointer',
}

export default Task