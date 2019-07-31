import React from 'react'
import { connect } from 'react-redux'

import Button from './button'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: () => dispatch({ type: 'NEXT_SLIDE' })
})

const mergeProps = (stateProps, dispatchProps, ownProps) =>  ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  className: 'carousel--button__next'
})

const NextButton = connect( mapStateToProps, mapDispatchToProps, mergeProps )( Button )

export default NextButton
