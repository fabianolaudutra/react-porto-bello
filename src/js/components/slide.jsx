import React, { PropTypes } from 'react'

const Slide = ({ img, caption }) => (
	<div className="carousel--slide">
		<div className="carousel--slide--image" style={{backgroundImage: 'url(' + img + ')'}} />
		<div className="carousel--slide--caption">
			{caption}
		</div>
	</div>
)

Slide.propTypes = {
	img: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired
}

export default Slide
