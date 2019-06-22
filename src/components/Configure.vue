<template>
  <div class="card-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Configuration</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Home Position Angle</label>
          <md-input v-model="origin" type="number" min="0" max="360"></md-input>
        </md-field>
        <md-field>
        <label>Counter clockwize angle</label>
        <md-input v-model="negativeAngle" type="number" min="0"></md-input>
        </md-field>
        <md-field>
          <label>Clockwize angle</label>
          <md-input v-model="positiveAngle" type="number" min="0"></md-input>
        </md-field>
        <md-field>
          <label>Reduction rate</label>
          <md-input v-model="reductionRate" type="number" min="0"></md-input>
        </md-field>
      </md-card-content>
    </md-card>

    <md-card>
      <md-card-header>
        <div class="md-title">Preview</div>
      </md-card-header>

      <md-card-content>
        <div>
          <StepperMotor :radius="90" :positiveAngle="positiveAngle" :negativeAngle="negativeAngle" :origin="origin"></StepperMotor>
        </div>
      </md-card-content>
    </md-card>

  </div>
</template>

<script>

import StepperMotor from '@/components/StepperMotor'

export default {
  name: 'Configure',
  data () {
    return {
      positiveAngle: 90.0,
      negativeAngle: 90.0,
      position: 23.0,
      origin: 0.0,
      reductionRate: 6.0
    }
  },
  components: {
    StepperMotor
  }
}
</script>

<style scoped>

  .card-container {
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
