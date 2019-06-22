<template>
  <div>
    <svg preserveAspectRatio="xMidYMid meet" focusable="false" class="stepper-motor-position" :style="_svgStyle" >
      <text :class="['positionValue', _positionHasToBeHidden ? 'hidden' : '']" x="50%" y="50%" font-family="Verdana" font-size="35" text-anchor="middle" alignment-baseline="central">{{ position }}°</text>
      <circle class="background" cx="50%" cy="50%" :r=radius :transform="_circleRotation"></circle>
      <circle  class="negative-amplitude" cx="50%" cy="50%" :r=radius :transform="_circleRotation"
            :style="{ strokeDasharray: _negativeDashArray }"></circle>
      <circle  class="positive-amplitude" cx="50%" cy="50%" :r=radius :transform="_circleRotation"
            :style="{ strokeDasharray: _positiveDashArray }"></circle>
      <circle class="origin" :cx="_originOnCircleX" :cy="_originOnCircleY"></circle>
      <circle class="limit-cursor" :cx="_startCursorOnCircleX" :cy="_startCursorOnCircleY"></circle>
      <circle class="limit-cursor" :cx="_endCursorOnCircleX" :cy="_endCursorOnCircleY"></circle>
      <circle :class="['cursor', _positionHasToBeHidden ? 'hidden' : '']" :cx="_positionOnCircleX" :cy="_positionOnCircleY"></circle>
      <text class="icon" x="50%" y="50%" >dashboard</text>
    </svg>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'

export default {
  name: 'StepperMotor',
  props: {
    radius: {
      type: Number,
      default: 100
    },
    positiveAngle: Number,
    negativeAngle: Number,
    position: {
      type: Number
    },
    origin: Number
  },
  data: () => ({
    margin: 20,
    test: true
  }),
  computed: {

    circlePerimeter: function () {
      return (this.radius * 2 * Math.PI)
    },

    _negativeDashArray: function () {
      let array = []
      let overlap = Math.max(0, this.circlePerimeter * (parseInt(this.negativeAngle) - parseInt(this.origin)) / 360)
      // we begin with a hole, so the first line end at 0px
      array.push(0)
      // we begin the line
      array.push(Math.max(0, this.circlePerimeter * (parseInt(this.origin) - parseInt(this.negativeAngle)) / 360))
      // we end the line at the origin
      array.push((this.circlePerimeter * parseInt(this.negativeAngle) / 360) - overlap)

      // we begin a hole until the overlap of the negative value on the positive angle
      array.push(this.circlePerimeter - (this.circlePerimeter * parseInt(this.origin) / 360) - overlap)
      // we complete to end the circle with end of the overlap
      array.push(overlap)
      return array.join(',')
    },

    _positiveDashArray: function () {
      let array = []
      // we begin with a hole, so the first line end at 0px or with the overlap
      let overlap = Math.max(0, this.circlePerimeter * (parseInt(this.origin) + parseInt(this.positiveAngle) - 360) / 360)
      array.push(overlap)

      // we begin the line at the origin
      array.push(this.circlePerimeter * parseInt(this.origin) / 360 - overlap)
      // we end the line at th en of the positive angle or at the end of the circle
      array.push(this.circlePerimeter * parseInt(this.positiveAngle) / 360)
      // we add the remaining
      array.push(Math.max(0, this.circlePerimeter - (this.circlePerimeter * (parseInt(this.origin) + parseInt(this.positiveAngle)) / 360)))

      return array.join(',')
    },

    _positionOnCircleX: function () {
      return Math.cos((parseInt(this.position) - 90) * Math.PI / 180) * this.radius
    },

    _positionOnCircleY: function () {
      return Math.sin((parseInt(this.position) - 90) * Math.PI / 180) * this.radius
    },

    _originOnCircleX: function () {
      return Math.cos((parseInt(this.origin) - 90) * Math.PI / 180) * this.radius
    },

    _originOnCircleY: function () {
      return Math.sin((parseInt(this.origin) - 90) * Math.PI / 180) * this.radius
    },

    _startCursorOnCircleX: function () {
      return Math.cos((parseInt(this.origin) - parseInt(this.negativeAngle) - 90) * Math.PI / 180) * this.radius
    },

    _startCursorOnCircleY: function () {
      return Math.sin((parseInt(this.origin) - parseInt(this.negativeAngle) - 90) * Math.PI / 180) * this.radius
    },

    _endCursorOnCircleX: function () {
      return Math.cos((parseInt(this.origin) + parseInt(this.positiveAngle) - 90) * Math.PI / 180) * this.radius
    },

    _endCursorOnCircleY: function () {
      return Math.sin((parseInt(this.origin) + parseInt(this.positiveAngle) - 90) * Math.PI / 180) * this.radius
    },

    _width: function () {
      return this.radius * 2 + this.margin * 2
    },

    _svgStyle: function () {
      return 'width: ' + this._width + 'px; height: ' + this._width + 'px;'
    },

    _circleRotation: function () {
      return 'rotate(-90, ' + this._width / 2 + ',' + this._width / 2 + ')'
    },

    _positionHasToBeHidden: function () {
      return this.position === undefined
    }
  }
}
</script>

<style>

.negative-amplitude {
  stroke-width: 15px;
  stroke: #ff5252;
  fill: none;
}

.positive-amplitude {
  stroke-width: 15px;
  stroke: #ff5252;
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
  r: 10;
}

.origin {
  stroke-width: 0px;
  fill: #ff5252;
  stroke: #ff5252;
  transform: translate(50%, 50%);
  r: 15;
}

.limit-cursor {
  stroke-width: 0px;
  fill: #ff5252;
  stroke: #ff5252;
  transform: translate(50%, 50%);
  r: 15;
}

.positionValue {
  fill : white;
}

.hidden {
  visibility: hidden;
}

.icon {
  font-family: "Material Icons";
}
</style>
