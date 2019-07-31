import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Indicator from './indicator'

const SlideIndicators = ({ slides, onChange }) => (
  <div className="carousel--indicators">
    {slides.map((slide, index) => (
      <Indicator key={index} index={index} active={slide.active===true} onChange={onChange} />
    ))}
  </div>
)

SlideIndicators.propTypes = {
  slides: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  slides: state.carousel
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (index) => dispatch({ type: 'CHANGE_SLIDE', index })
})

export default connect( mapStateToProps, mapDispatchToProps )( SlideIndicators )
