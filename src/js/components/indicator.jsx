import React, { PropTypes } from 'react'

const Indicator = ({ active = false, index, onChange }) => (
	<div
    className={active === true ? 'carousel--indicator__active' : 'carousel--indicator'}
    onClick={() => onChange(index) }
  />
)

Indicator.propTypes = {
	active: PropTypes.bool.isRequired,
	index: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Indicator
