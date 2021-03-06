import {
  FETCH_HOME_DATA
} from '../constants/ActionTypes'

import merge from '../utils/merge'

const InitialState = {

}

const homeData = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA:
      return merge(state, action.payload)
    default:
      return state
  }
}

export {
  homeData
}