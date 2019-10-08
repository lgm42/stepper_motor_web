export const store = {
  state: {
    positiveAngle: 90,
    negativeAngle: 90,
    position: 25,
    origin: 0,
    reductionRate: 6,
    motorStepNumber: 64,
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
  reductionRate (value) {
    this.state.reductionRate = parseFloat(value)
  },
  motorStepNumber (value) {
    this.state.motorStepNumber = parseFloat(value)
  },
  stepResolution (value) {
    this.state.stepResolution = parseFloat(value)
  },
  load () {
    fetch('http://' + process.env.SERVER_IP + '/parameters')
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        if (data.result) {
          store.positiveAngle(data.data.parameters['positive-angle-amplitude'])
          store.negativeAngle(data.data.parameters['negativeAngle'])
          store.origin(data.data.parameters['origin-angle'])
          store.reductionRate(data.data.parameters['reduction-rate'])
          store.motorStepNumber(data.data.parameters['motor-step-number'])
          store.stepResolution(1)
        }
      })
      .catch((err) => console.error(err))
  }
}
