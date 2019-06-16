<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Motor position</div>
      </md-card-header>

      <md-card-content>
        <div>
          <StepperMotor :radius="180"></StepperMotor>
        </div>
        <div id="stepper"></div>
        <div>
          <input type="range" v-model.number="startAngle"> {{ startAngle }}%
        </div>
      </md-card-content>

    </md-card>
  </div>
</template>

<script>

import StepperMotor from '@/components/StepperMotor'

export default {
  name: 'Monitor',
  data: () => ({
    startAngle: 0,
    stopAngle: 270
  }),
  components: {
    StepperMotor
  }
}

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
  fill: black;
  transform-origin: center;
  width: 200px; height: 200px;
}
.stepperMotorPosition > circle {
  stroke-width: 6px;
  stroke: #ff5252;
}
</style>
