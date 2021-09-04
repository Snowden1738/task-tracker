import TaskInputField from './TaskInputField'

class AddTask extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			time: '',
			date: '',
			reminder: false,
			autoHideAdder: true,
			prompt: false
		}
	}

	setText = (newText) => {
		this.setState({ text: newText })
	}

	setDate = (newDate) => {
		this.setState({ date: newDate })
	}

	setTime = (newTime) => {
		this.setState({ time: newTime })
	}

	releasePrompt = () => {
		this.setState({ prompt: false })
	}

	onSubmit = (e) => {
		e.preventDefault()

		this.setState({ prompt:
				this.state.text.length == 0
				|| this.state.date.length == 0
				|| this.state.time.length == 0
			}, () => {
			if (this.state.prompt) {
				return
			}
	
			this.props.addTask({
				text: this.state.text,
				date: this.state.date,
				time: this.state.time,
				reminder: this.state.reminder,
				completed: false
			})
	
			this.setState({ text: '' })
			this.setState({ date: '' })
			this.setState({ time: '' })
			this.setState({ reminder: false })
	
			this.state.autoHideAdder && this.props.closeAdder()
		})
	}

	render() {
		return (
			<div>
				<form className='add-form'>
					<div className='form-control form-control-check'>
						<label>
							<h6>
								<em>Hide automatically after adding task</em>
							</h6>
						</label>
						<input type='checkbox' className='form-control-check' checked={this.state.autoHideAdder} onChange={(e) => this.setState({ autoHideAdder: e.target.checked })} />
					</div>
					<TaskInputField
						className='form-control'
						type='text'
						value={this.state.text}
						placeholder='Add Task Title'
						label='Task'
						setValue={this.setText}
						prompt={this.state.prompt}
						releasePrompt={this.releasePrompt}
					/>
					<TaskInputField
						className='form-control'
						type='date'
						value={this.state.date}
						placeholder=''
						label='Date'
						setValue={this.setDate}
						prompt={this.state.prompt}
						releasePrompt={this.releasePrompt}
					/>
					<TaskInputField
						className='form-control'
						type='time'
						value={this.state.time}
						placeholder=''
						label='Time'
						setValue={this.setTime}
						prompt={this.state.prompt}
						releasePrompt={this.releasePrompt}
					/>
					<div className='form-control form-control-check'>
						<label>Set Reminder</label>
						<input type='checkbox' checked={this.state.reminder} onChange={
							(e) => this.setState({ reminder: e.target.checked })
						}/>
					</div>
					<input type='button' value='Save Task' className='btn btn-block' onClick={this.onSubmit}/>
				</form>
			</div>
		)
	}
}

export default AddTask
