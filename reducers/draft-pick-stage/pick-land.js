const possiblePickLand = require('./factory/possilbe-pick-land')
const { DRAFT_PICK_STAGE_ACTION_PREFIX, DRAFT_PICK_STAGE_ID } = require('./constant')
const pickLand = require('./shared/factory/pick-land')

module.export = function(originalState, event) {
  let state = originalState
  const previousPlayer = state.playerSequence[state.playerSequence.indexOf(event.playerId) - 1]


  state = sharedPickLand(event.playerId)(state, event)

  if (previousPlayer) {
    return {
      ...state,
      possibleActions: [
        ...pickLand(previousPlayer)
      ]
    }
  } else {
    return {
      ...state,
      stages: state.stages.reduce(function(acc, stage) {
        if (stage.state === 'COMPLETED' || stage.id !== DRAFT_PICK_STAGE_ID) return acc.push(stage)

        return acc.push({
          ...stage,
          status: 'COMPLETED',
        })
      }, []), 
      possibleActions: []
    }
  } 
}
