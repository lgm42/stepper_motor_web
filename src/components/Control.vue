<template>
  <div class="card-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Motor position</div>
      </md-card-header>

      <md-card-content>
        <div>
          <StepperMotor :radius="90" :positiveAngle="positiveAngle" :negativeAngle="negativeAngle" :position="position" :origin="origin"></StepperMotor>
        </div>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>

import StepperMotor from '@/components/StepperMotor'
import { store } from '../store'

export default {
  name: 'Control',
  data () {
    return {
      positiveAngle: store.state.positiveAngle,
      negativeAngle: store.state.negativeAngle,
      position: store.state.position,
      origin: store.state.origin
    }
  },
  components: {
    StepperMotor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
