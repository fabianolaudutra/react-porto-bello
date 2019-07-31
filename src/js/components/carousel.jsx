'use strict'

import React, { Component } from 'react'

import PreviousButton from './previous_button'
import NextButton from './next_button'
import ActiveSlide from './active_slide'
import SlideIndicators from './slide_indicators'

const Carousel = () => (
  <div className="carousel">
    <ActiveSlide />
    <PreviousButton />
    <NextButton />
    <SlideIndicators />
  </div>
)

export default Carousel
