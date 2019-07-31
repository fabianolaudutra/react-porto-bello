import React from 'react'
import { connect } from 'react-redux'

import Slide from './slide'

const mapStateToProps = (state) => {
  const { img, caption } = state.carousel.find((element) => ( element.active === true ))
  return {
    img,
    caption
  }
}

const ActiveSlide = connect( mapStateToProps )( Slide )

export default ActiveSlide
