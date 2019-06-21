<template>
  <div>
    <svg preserveAspectRatio="xMidYMid meet" focusable="false" class="stepper-motor-position" >
      <circle class="origin" :cx="_originOnCircleX" :cy="_originOnCircleY" r=10></circle>
      <text class="positionValue" x="50%" y="50%" font-family="Verdana" font-size="35" text-anchor="middle" alignment-baseline="central">{{ position }}°</text>
      <circle class="background" cx="50%" cy="50%" :r=radius transform="rotate(-90, 100,100)"></circle>
      <circle  class="negative-amplitude" cx="50%" cy="50%" :r=radius transform="rotate(-90, 100,100)"
            :style="{ strokeDasharray: _negativeDashArray }"></circle>
      <circle  class="negative-amplitude" cx="50%" cy="50%" :r=radius transform="rotate(-90, 100,100)"
            :style="{ strokeDasharray:'0, ' + _positiveStartDashValue + ', ' + _positiveStopDashValue + ', ' + _positiveRemainingDashValue }"></circle>
      <circle class="cursor" :cx="_positionOnCircleX" :cy="_positionOnCircleY" r=10></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'StepperMotor',
  props: ['radius', 'positiveAngle', 'negativeAngle', 'position', 'origin'],
  data: () => ({
  }),
  computed: {

    circlePerimeter: function () {
      return (this.radius * 2 * Math.PI)
    },

    _negativeDashArray: function () {
      let array = []
      // we begin with a hole, so the first line end at 0px
      array.push(0)
      // we begin the line
      array.push(Math.max(0, this.circlePerimeter * (this.origin - this.negativeAngle) / 360))
      // we end the line at the origin
      array.push(this.circlePerimeter * this.origin / 360)
      // we begin a hole until the overlap of the negative value on the positive angle
      array.push(this.circlePerimeter - (this.circlePerimeter * this.negativeAngle / 360))
      // we complete to end the circle with end of the overlap
      array.push(Math.max(0, this.circlePerimeter * (this.negativeAngle - this.origin) / 360))
      return array.join(',')
    },

    _positiveDashArray: function () {
      let array = []
      // we begin with a hole, so the first line end at 0px or with the overlap
      array.push(Math.max(0, this.circlePerimeter * (360 - this.origin) / 360))

      // we begin the line at the origin
      array.push(this.circlePerimeter * this.origin / 360)
      // we end the line at th en of the positive angle or at the end of the circle
      array.push(Math.min(this.circlePerimeter, this.circlePerimeter * this.positiveAngle / 360))
      // we add the remaining
      array.push(Math.max(0, this.circlePerimeter - (this.circlePerimeter * (this.origin + this.positiveAngle) / 360)))

      // we complete to end the circle with end of the overlap
      array.push(Math.max(0, this.circlePerimeter * (this.negativeAngle - this.origin) / 360))
      return array.join(',')
    },

    _negativeStopDashValue: function () {
      return this.circlePerimeter * this.origin / 360
    },

    _negativeRemainingDashValue: function () {
      return this.circlePerimeter - this._negativeStartDashValue - this._negativeStopDashValue
    },

    _positiveStartDashValue: function () {
      return this.circlePerimeter * this.origin / 360
    },

    _positiveStopDashValue: function () {
      return this.circlePerimeter * (this.origin + this.positiveAngle) / 360
    },

    _positiveRemainingDashValue: function () {
      return this.circlePerimeter - this._positiveStartDashValue - this._positiveStopDashValue
    },

    _positionOnCircleX: function () {
      return Math.cos((this.position - 90) * Math.PI / 180) * this.radius
    },

    _positionOnCircleY: function () {
      return Math.sin((this.position - 90) * Math.PI / 180) * this.radius
    },

    _originOnCircleX: function () {
      return Math.cos((this.origin - 90) * Math.PI / 180) * this.radius
    },

    _originOnCircleY: function () {
      return Math.sin((this.origin - 90) * Math.PI / 180) * this.radius
    }
  }
}
</script>

<style>

.stepper-motor-position {
  width: 200px; height: 200px;
}

.negative-amplitude {
  stroke-width: 8px;
  stroke: #ff5252;
  fill: none;
}

.positive-amplitude {
  stroke-width: 8px;
  stroke: green;
  fill: none;
}

.background {
  stroke: gray;
  stroke-width: 8px;
  fill: none;
}

.cursor {
  stroke-width: 3px;
  stroke: green;
  fill: black;
  transform: translate(50%, 50%);
}

.origin {
  stroke-width: 0px;
  fill: #ff5252;
  stroke: #ff5252;
  transform: translate(50%, 50%);
}

.positionValue {
  fill : white;
}
</style>
