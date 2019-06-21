<template>
  <div>
    <svg preserveAspectRatio="xMidYMid meet" focusable="false" class="stepper-motor-position" :style="_svgStyle" >
      <text class="positionValue" x="50%" y="50%" font-family="Verdana" font-size="35" text-anchor="middle" alignment-baseline="central">{{ position }}°</text>
      <circle class="background" cx="50%" cy="50%" :r=radius :transform="_circleRotation"></circle>
      <circle  class="negative-amplitude" cx="50%" cy="50%" :r=radius :transform="_circleRotation"
            :style="{ strokeDasharray: _negativeDashArray }"></circle>
      <circle  class="positive-amplitude" cx="50%" cy="50%" :r=radius :transform="_circleRotation"
            :style="{ strokeDasharray: _positiveDashArray }"></circle>
      <circle class="origin" :cx="_originOnCircleX" :cy="_originOnCircleY"></circle>
      <circle class="limit-cursor" :cx="_startCursorOnCircleX" :cy="_startCursorOnCircleY"></circle>
      <circle class="limit-cursor" :cx="_endCursorOnCircleX" :cy="_endCursorOnCircleY"></circle>
      <circle class="cursor" :cx="_positionOnCircleX" :cy="_positionOnCircleY"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'StepperMotor',
  props: ['radius', 'positiveAngle', 'negativeAngle', 'position', 'origin'],
  data: () => ({
    margin: 20
  }),
  computed: {

    circlePerimeter: function () {
      return (this.radius * 2 * Math.PI)
    },

    _negativeDashArray: function () {
      let array = []
      let overlap = Math.max(0, this.circlePerimeter * (this.negativeAngle - this.origin) / 360)
      // we begin with a hole, so the first line end at 0px
      array.push(0)
      // we begin the line
      array.push(Math.max(0, this.circlePerimeter * (this.origin - this.negativeAngle) / 360))
      // we end the line at the origin
      array.push((this.circlePerimeter * this.negativeAngle / 360) - overlap)

      // we begin a hole until the overlap of the negative value on the positive angle
      array.push(this.circlePerimeter - (this.circlePerimeter * this.origin / 360) - overlap)
      // we complete to end the circle with end of the overlap
      array.push(overlap)
      return array.join(',')
    },

    _positiveDashArray: function () {
      let array = []
      // we begin with a hole, so the first line end at 0px or with the overlap
      let overlap = Math.max(0, this.circlePerimeter * (this.origin + this.positiveAngle - 360) / 360)
      array.push(overlap)

      // we begin the line at the origin
      array.push(this.circlePerimeter * this.origin / 360 - overlap)
      // we end the line at th en of the positive angle or at the end of the circle
      array.push(this.circlePerimeter * this.positiveAngle / 360)
      // we add the remaining
      array.push(Math.max(0, this.circlePerimeter - (this.circlePerimeter * (this.origin + this.positiveAngle) / 360)))

      return array.join(',')
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
    },

    _startCursorOnCircleX: function () {
      return Math.cos((this.origin - this.negativeAngle - 90) * Math.PI / 180) * this.radius
    },

    _startCursorOnCircleY: function () {
      return Math.sin((this.origin - this.negativeAngle - 90) * Math.PI / 180) * this.radius
    },

    _endCursorOnCircleX: function () {
      return Math.cos((this.origin + this.positiveAngle - 90) * Math.PI / 180) * this.radius
    },

    _endCursorOnCircleY: function () {
      return Math.sin((this.origin + this.positiveAngle - 90) * Math.PI / 180) * this.radius
    },

    _width: function () {
      return this.radius * 2 + this.margin * 2
    },

    _svgStyle: function () {
      return 'width: ' + this._width + 'px; height: ' + this._width + 'px;'
    },

    _circleRotation: function () {
      return 'rotate(-90, ' + this._width / 2 + ',' + this._width / 2 + ')'
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
</style>
