import Task from './Task'

const Tasks = ({ taskList, onDelete, onToggle, onCompletion }) => {
	return (
		<div>
			{taskList.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onCompletion={onCompletion}/>))}
		</div>
	)
}

export default Tasks