<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Motor position</div>
      </md-card-header>

      <md-card-content>
        <div>
          <StepperMotor :radius="90" :positiveAngle="positiveAngle" :negativeAngle="negativeAngle" :position="position" :origin="origin"></StepperMotor>
        </div>
        <div>
          Negative angle<input type="range" v-model.number="negativeAngle" min="0" max="360"> {{ negativeAngle }} °<br/>
          Positive angle<input type="range" v-model.number="positiveAngle"  min="0" max="360"> {{ positiveAngle }} °<br/>
          Position<input type="range" v-model.number="position" min="0" max="360"> {{ position }} °<br/>
          Origin<input type="range" v-model.number="origin" min="0" max="360"> {{ origin }} °<br/>
        </div>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>

import StepperMotor from '@/components/StepperMotor'
import { store } from '../store'

export default {
  name: 'Monitor',
  data: () => ({
    positiveAngle: store.state.positiveAngle,
    negativeAngle: store.state.negativeAngle,
    position: store.state.position,
    origin: store.state.origin
  }),
  components: {
    StepperMotor
  }
}
// var stepper = new StepperMotor();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.stepperMotorPosition {
  transform-origin: center;
  width: 200px; height: 200px;
}

</style>
