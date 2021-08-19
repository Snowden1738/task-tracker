import { useState } from 'react'

const AddTask = ({ addTask, closeAdder }) => {
	const [text, setText] = useState('')
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const [reminder, setReminder] = useState(false)
	const [autoHideAdder, setAutoHide] = useState(true)

	const onSubmit = (e) => {
		e.preventDefault()

		if (text.length == 0) {
			alert('Please add a task title!')
			return
		}

		if (date.length == 0) {
			alert('Please add a date for the task!')
		}

		if (time.length == 0) {
			alert('Please add a time for the task!')
			return
		}

		const completed = false
		addTask({ text, date, time, reminder, completed })

		setText('')
		setDate('')
		setTime('')
		setReminder(false)

		autoHideAdder && closeAdder()
	}

	return (
		<div>
			<form className='add-form' onSubmit={onSubmit}>
				<div className='form-control form-control-check'>
					<label>
						<h6>
							<em>Hide automatically after adding task</em>
						</h6>
					</label>
					<input type='checkbox' className='form-control-check' checked={autoHideAdder} onChange={(e) => setAutoHide(e.target.checked)} />
				</div>
				<div className='form-control'>
					<label>Task</label>
					<input type='text' placeholder='Add Task Title' value={text} onChange={(e) => setText(e.target.value)}/>
				</div>
				<div className='form-control'>
					<label>Date</label>
					<input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
				</div>
				<div className='form-control'>
					<label>Time</label>
					<input type='Time' value={time} onChange={(e) => setTime(e.target.value)}/>
				</div>
				<div className='form-control form-control-check'>
					<label>Set Reminder</label>
					<input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
				</div>
				<input type='submit' value='Save Task' className='btn btn-block'/>
			</form>
		</div>
	)
}

export default AddTask
