const { DRAFT_PICK_STAGE_ACTION_PREFIX, DRAFT_PICK_STAGE_ID } = require('../constant')

module.export = function(playerId) {
  return function(state, event) {
    return {
      ...state,
      possibleActions: Object.keys(this.state.lands).reduce(function(acc, key) {
        const land = this.state.lands[key]

        if (land.occupiedBy) return acc;

        return acc.push({
          type: `${DRAFT_PICK_STAGE_ACTION_PREFIX}pick-land`,
          playerId,
          landId: land.id, 
        })
      }, [])
    } 
  }
}