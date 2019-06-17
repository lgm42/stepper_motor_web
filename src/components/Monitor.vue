<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Motor position</div>
      </md-card-header>

      <md-card-content>
        <div>
          <StepperMotor :radius="80" :startAngle="startAngle" :stopAngle="stopAngle" :position="position"></StepperMotor>
        </div>
        <div>
          <input type="range" v-model.number="startAngle" min="0" max="360"> {{ startAngle }} °
          <input type="range" v-model.number="stopAngle"  min="0" max="360"> {{ stopAngle }} °
          <input type="range" v-model.number="position" min="0" max="360"> {{ position }} °
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
    startAngle: 90,
    stopAngle: 270,
    position: 90
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
