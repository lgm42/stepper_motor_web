<template>
  <svg preserveAspectRatio="xMidYMid meet" focusable="false" class="stepperMotorPosition" >
    <circle cx="50%" cy="50%" :r=radius
           v-bind:style="{ strokeDasharray:'0, ' + computed1 + ', 5, 22' }"></circle>
  </svg>
</template>

<script>
export default {
  name: 'StepperMotor',
  data: () => ({
    startAngle: 0,
    stopAngle: 270,
    position: 85,
    radius: 60,
    computed1: 25
  }),
  computed: {
    // un accesseur (getter) calculé
    circlePerimeter: function () {
      // `this` pointe sur l'instance vm
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

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
