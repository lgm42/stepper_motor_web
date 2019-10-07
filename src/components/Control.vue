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
        <div>
          <md-button class="md-icon-button md-raised md-accent toolButton" v-on:click="rotate(-90)">
            -90&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised md-accent toolButton" v-on:click="rotate(-45)">
            -45&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(-10)">
            -10&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(-5)">
            -5&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(-1)">
            -1&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised md-accent" v-on:click="setPosition(0)">
            <md-icon>home</md-icon>
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(1)">
            +1&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(5)">
            +5&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton" v-on:click="rotate(10)">
            +10&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton md-accent" v-on:click="rotate(45)">
            +45&nbsp;
          </md-button>
          <md-button class="md-icon-button md-raised toolButton md-accent" v-on:click="rotate(90)">
            +90&nbsp;
          </md-button>
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
  created () {
    this.interval = setInterval(() => {
      fetch('http://' + process.env.SERVER_IP + '/position')
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          if (data.result) {
            store.position(data.data.position)
          }
        })
        .catch((err) => console.error(err))
    }, 1000)
  },
  components: {
    StepperMotor
  },
  methods: {
    rotate: function (value) {
      fetch('http://' + process.env.SERVER_IP + '/startRotate?relativeAngle=' + value)
        .then((res) => res.json())
        .then(data => {
          console.log(data)
          store.state.position = data.data.position
        })
        .catch((err) => console.error(err))
    }
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

.toolButton {
  font-size: 18px;
}
</style>
