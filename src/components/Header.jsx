// import React from 'react'
import Button from './Button'

const Header = ({ header, showAdder, onClickAdd }) => {
	return (
		<header className='header'>
			<h1>{header}</h1>
			<Button
				color={showAdder ? 'green' : 'darkblue'}
				text={showAdder ? 'Hide' : 'Add'}
				onClick={onClickAdd}
			/>
		</header>
	)
}

export default Header