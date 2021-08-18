import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

const App = () => {
	const [showAdder, setAdder] = useState(false)
	const [tasks, setTasks] = useState([])

	const getTasksSorted = (taskList) => {
		const taskData = taskList
		taskData.sort((task1, task2) => (
			new Date(task2.day).getTime()
			-
			new Date(task1.day).getTime()
		))
		return taskData
	}

	useEffect(() => {
		const getTasks = async () => {
			const taskData = await fetchTasks()
			setTasks(getTasksSorted(taskData))
		}

		getTasks()
	}, [])

	const fetchTasks = async () => {
		const response = await fetch("http://localhost:5000/tasks")
		const data = await response.json()

		return data
	}

	const fetchTask = async (id) => {
		const response = await fetch(`http://localhost:5000/tasks/${id}`)
		const data = await response.json()

		return data
	}

	const onClickAdd = () => {
		setAdder(!showAdder)
	}

	const closeAdder = () => {
		setAdder(false)
	}

	const addTask = async (task) => {
		const response = await fetch("http://localhost:5000/tasks", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			"body": JSON.stringify(task)
		})

		const taskData = await response.json()
		setTasks(getTasksSorted([...tasks, taskData]))
	}

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, {
			method: "DELETE"
		})

		setTasks(tasks.filter((task) => task.id !== id))
	}

	const toggleReminder = async (id) => {
		const oldTask = await fetchTask(id)
		const newTask = { ...oldTask, reminder: !oldTask.reminder }

		const response = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newTask)
		})

		const data = await response.json()
		setTasks(tasks.map((task) => task.id === id ? data : task))
	}

	const toggleCompletion = async (id) => {
		const oldTask = await fetchTask(id)
		const newTask = { ...oldTask, completed: !oldTask.completed }

		const response = await fetch(`http://localhost:5000/tasks/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(newTask)
		})

		const data = await response.json()
		setTasks(tasks.map((task) => task.id === id ? data : task))
	}

	return (
		<div className='container'>
			<Header header='Task Tracker' showAdder={showAdder} onClickAdd={onClickAdd}/>
			{
				showAdder
				? (<AddTask addTask={addTask} closeAdder={closeAdder}/>)
				: (<h3>Click <code>Add</code> to add a new task</h3>)
			}
			<br />
			{
				tasks.length > 0 ? (
					<Tasks
						taskList={tasks}
						onDelete={deleteTask}
						onToggle={toggleReminder}
						onCompletion={toggleCompletion}
					/>
				) : ('No tasks pending! You\'re all caught up!')
			}
		</div>
	)
}

export default App
