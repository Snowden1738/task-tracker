const TaskInputField = ({
	type,
	value,
	label,
	placeholder,
	className,
	setValue,
	prompt,
	releasePrompt
}) => {
	const onChange = (e) => {
		releasePrompt()
		setValue(e.target.value)
	}

	return (
		<div className={className}>
		<label>{label}</label>
		<input
			type={type}
			value={value}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
		>
		</input>
		<h6>{ prompt && value.length == 0 ? `${label} cannot be empty!` : `` }</h6>
		</div>
	)
}

export default TaskInputField