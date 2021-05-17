import Task from './Task.js'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <ul className='list'>
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                />
            ))}
        </ul>
    );
}

export default Tasks