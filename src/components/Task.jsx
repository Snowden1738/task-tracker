import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onCompletion }) => {
	return (
		<div
			className={
				'task'
				+ (task.reminder ? ' reminder' : '')
				+ (task.completed ? ' done' : '')
			}
			onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text}
				<FaTimes
					className='close-btn'
					onClick={() => onDelete(task.id)}
				/>
			</h3>
			<input
				type='datetime-local'
				value={task.day}
				disabled={true}
			/>
			<br />
			<input
				type='button'
				className='cmp-btn'
				value={
					task.completed
					? 'Mark as Incomplete'
					: 'Mark as Completed'
				}
				onClick={() => onCompletion(task.id)}
			/>
		</div>
	)
}

export default Task
