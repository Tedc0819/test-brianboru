module.export = {
  playerSequence: ['playerId1', 'playerId2'],
  players: {
    playerId1: {
      initPicked: false,
    }
  },
  stages: [
    {
      id: ''
      status: '', // IN_PROGRESS, COMPLETE
    }
  ],
  lands: {
    land1: {
      id: 'id',
      occupiedBy: null
    }
  },
  possibleActions: [
    {
      // player1 use card action 1
    },
  ] 
}

class Stage {
  constructor() {
    this.status = 'IN_PROGRESS'
  }

  complete() {
    this.status = 'COMPLETED'
  }

  isCompleted() {
    return this.status = 'COMPLETED'
  }
}


class DraftPickStage extends Stage {
  constructor() {
    super()
    this.stageId = 'DRAFT_PICK_STAGE'
  }

}