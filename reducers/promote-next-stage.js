module.export = function (state, event) {
  const lastStage = state.stages.last

  if (lastStage && !state.stages.isCompleted) {
    throw new Error()
  }

  if (!lastStage) {
    return promoteToDraftPick(state, event);
  }
}

function promoteToDraftPickStage(state, event) {
  const stage = new DraftPickStage
  
  return {
    ...state,
    stages: [
      ...stages,
      { ...stage }
    ]
  }
}