import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onCompletion }) => {
	return (
		<div
			className={
				'task'
				+ (task.reminder ? ' reminder' : ' no-reminder')
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
				type='date'
				className='task-date'
				value={task.date}
				disabled={true}
			/>
			<br />
			<input
				type='time'
				className='task-time'
				value={task.time}
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
