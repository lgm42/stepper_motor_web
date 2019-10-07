export const store = {
  state: {
    positiveAngle: 90,
    negativeAngle: 90,
    position: 25,
    origin: 0,
    reductionRate: 6,
    stepResolution: 0.125
  },

  positiveAngle (angle) {
    console.log('positiveAngle déclenchée avec', angle)
    this.state.positiveAngle = parseInt(angle)
  },
  negativeAngle (angle) {
    this.state.negativeAngle = parseInt(angle)
  },
  position (angle) {
    console.log('position déclenchée avec', angle)
    this.state.position = parseInt(angle)
  },
  origin (angle) {
    this.state.origin = parseInt(angle)
  },
  reductionRate (angle) {
    this.state.reductionRate = parseFloat(angle)
  },
  stepResolution (angle) {
    this.state.stepResolution = parseFloat(angle)
  }
}
