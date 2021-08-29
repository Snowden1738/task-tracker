import Task from './Task'

const Tasks = ({ taskList, onDelete, onToggle, onCompletion }) => {
	return (
		<div>
			{
				taskList.length > 0
				? taskList.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} onCompletion={onCompletion}/>))
				: 'No tasks available with matching search query!'
			}
		</div>
	)
}

export default Tasks