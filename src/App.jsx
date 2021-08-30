import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

const App = () => {
	const [showAdder, setAdder] = useState(false)
	const [tasks, setTasks] = useState([])
	const [query, setQuery] = useState('')

	const getMatchingTasks = (tasks) => {
		const contains = (text, pattern) => {
			let i = 0
			let j = 0

			while (i < text.length && j < pattern.length) {
				if (text[i].toLowerCase() === pattern[j].toLowerCase()) {
					i = i + 1
					j = j + 1
				} else {
					i = i + 1
				}
			}

			return j == pattern.length
		}

		return tasks.filter((task) => contains(task.text, query))
	}

	const getTasksSorted = (taskList) => {
		const taskData = taskList
		taskData.sort((task1, task2) => (
			new Date(`${task2.date}T${task2.time}`).getTime()
			-
			new Date(`${task1.date}T${task1.time}`).getTime()
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
					<div>
						<div className="form-control">
							<input
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Search tasks"
							/>
						</div>
						<br />
						<Tasks
							taskList={getMatchingTasks(tasks)}
							onDelete={deleteTask}
							onToggle={toggleReminder}
							onCompletion={toggleCompletion}
						/>
					</div>
				) : ('No tasks pending! You\'re all caught up!')
			}
		</div>
	)
}

export default App
