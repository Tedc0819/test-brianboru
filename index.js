const state = {}
const appReducer = function(state, event) { return state }

function receiveEvent(event) {
  let res = appReducer(state, event);
  
  if (res.state.stages.last.status.completed) {
    res = receiveEvent({ type: "promote-next-stage"}) 
  }

  return res
}