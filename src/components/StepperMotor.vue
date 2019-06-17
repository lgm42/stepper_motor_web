<template>
  <svg preserveAspectRatio="xMidYMid meet" focusable="false" class="stepperMotorPosition" >
    <circle class="background" cx="50%" cy="50%" :r=radius></circle>
    <circle  class="amplitude" cx="50%" cy="50%" :r=radius
           :style="{ strokeDasharray:'0, ' + _startDashValue + ', ' + _stopDashValue + ', ' + _remainingDashValue }"></circle>
    <circle class="cursor" :cx="_positionOnCircleX" :cy="_positionOnCircleY" r=10></circle>
  </svg>
</template>

<script>
export default {
  name: 'StepperMotor',
  props: ['radius', 'startAngle', 'stopAngle', 'position'],
  data: () => ({
  }),
  computed: {
    // un accesseur (getter) calculé
    circlePerimeter: function () {
      // `this` pointe sur l'instance vm
      return (this.radius * 2 * Math.PI)
    },

    _startDashValue: function () {
      return this.circlePerimeter * this.startAngle / 360
    },

    _stopDashValue: function () {
      return this.circlePerimeter * (this.stopAngle - this.startAngle) / 360
    },

    _remainingDashValue: function () {
      return this.circlePerimeter - this._startDashValue - this._stopDashValue
    },

    _positionOnCircleX: function () {
      return Math.cos(this.position * Math.PI / 180) * this.radius
    },

    _positionOnCircleY: function () {
      return Math.sin(this.position * Math.PI / 180) * this.radius
    }
  }
}
</script>

<style>

.stepperMotorPosition {
  transform-origin: center;
  width: 200px; height: 200px;
  transform: rotate(-90deg);
}
.amplitude {
  stroke-width: 8px;
  stroke: #ff5252;
  fill: none;
}

.background {
  stroke: gray;
  stroke-width: 8px;
  fill: none;
}

.cursor {
  stroke-width: 0px;
  stroke: black;
  fill: green;
  transform: translate(50%, 50%);
}
</style>
