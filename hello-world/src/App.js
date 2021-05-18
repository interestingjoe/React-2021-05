import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'
import About from './components/About.js'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { useState } from 'react'


function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'one',
                day: 'This is day 1',
                reminder: true,
            },
            {
                id: 2,
                text: 'two',
                day: 'This is day 2',
                reminder: false,
            },
            {
                id: 3,
                text: 'three',
                day: 'This is day 3',
                reminder: true,
            },
            {
                id: 4,
                text: 'four',
                day: 'This is day 4',
                reminder: false,
            },
            {
                id: 5,
                text: 'five',
                day: 'This is day 5',
                reminder: true,
            },
        ]
    );

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    }

    const toggleReminder = (id) => {
        setTasks(
            tasks.map(
                (task) => task.id === id 
                ? { ...task, reminder: !task.reminder}
                : task
            )
        )
    }

    return (
        <Router>
            <div className="container">
                <Header title='This is the TITLE' 
                onAdd={() => setShowAddTask(!showAddTask)} 
                showAdd={showAddTask}
                />
                <Route path='/' exact render={(props) => (
                    <>
                        {showAddTask && <AddTask onAdd={addTask} />}
                        {tasks.length > 0 
                            ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
                            : 'No tasks to show'
                        }
                    </>
                )} />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
