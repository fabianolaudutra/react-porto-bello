'use strict'

const carousel = (state = [], action) => {
  let currentIndex
  switch(action.type) {
    case 'NEXT_SLIDE':
      currentIndex = state.findIndex((element) => ( element.active === true ))
      const nextIndex = currentIndex === state.length - 1 ? 0 : ++currentIndex
      return state.map((slide, index) => ({
        ...slide,
        active: index === nextIndex
      }))
    case 'PREVIOUS_SLIDE':
      currentIndex = state.findIndex((element) => ( element.active === true ))
      const previousIndex = currentIndex === 0 ? state.length - 1 : --currentIndex
      return state.map((slide, index) => ({
        ...slide,
        active: index === previousIndex
      }))
    case 'CHANGE_SLIDE':
      return state.map((slide, index) => ({
        ...slide,
        active: index === action.index
      }))
    default:
      return state
  }
}

export default carousel
