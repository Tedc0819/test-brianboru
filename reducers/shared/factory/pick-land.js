const { DRAFT_PICK_STAGE_ACTION_PREFIX, DRAFT_PICK_STAGE_ID } = require('../constant')
const { PLAYER_1_ID, LAND_1_ID } = require('./shared/constant')

module.export = function(playerId ) {
  return function(state, event) {
    return {
      ...state,
      lands: {
        ...state.lands,
        [event.landId]: {
          ...state.lands[event.landId],
          occupiedBy: event.playerId
        }
      }, 
    }
  }
}