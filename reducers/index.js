const reducerMap = {}

module.export = function(state, action) {
  let resState = state
  let stage = state.stages.last
  let reducerId = `${action.type}` //expect 'draft-pick-stage/pick-land'

  let reducer = reducerMap[reducerId] || require(`./reducers/${reducerId}`)

  reducerMap[reducerId] = reducer

  resState = reducer(state, action)

  return resState
}