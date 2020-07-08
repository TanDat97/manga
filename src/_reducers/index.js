import { combineReducers } from 'redux'

import cache from './cache.reducer'

const rootReducers = combineReducers({
  cache,
})

export default rootReducers
