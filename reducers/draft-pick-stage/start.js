const { DRAFT_PICK_STAGE_ACTION_PREFIX, DRAFT_PICK_STAGE_ID } = require('./constant')
const { PLAYER_1_ID, LAND_1_ID } = require('./shared/constant')
const possiblePickLand = require('./factory/possilbe-pick-land')

module.export = function(state, event) {
  const lastPlayer = state.playerSequence[state.playerSequence.length - 1]

  return {
    ...state,
    stages: [
      ...state.stages,
      { 
        stageId: DRAFT_PICK_STAGE_ID,
      }
    ],
    possibleActions: [
      ...possiblePickLand(lastPlayer), // to 'pick-land' action 
    ]
  }
  
}