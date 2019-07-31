import React, { PropTypes } from 'react'

const Button = ({ className, onButtonClick }) => (
	<div className={className} onClick={() => onButtonClick() } />
)

Button.propTypes = {
	className: PropTypes.string.isRequired,
	onButtonClick: PropTypes.func.isRequired
}

export default Button
