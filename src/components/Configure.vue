<template>
  <div class="card-container">
    <md-card>
      <md-card-header>
        <div class="md-title">Configuration</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Home Position Angle</label>
          <md-input v-model="origin" type="number" min="0" max="359"></md-input>
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
        <md-field>
          <label for="stepResolution">Stepper motor resolution</label>
          <md-select v-model="stepResolution">
            <md-option v-for="stepResolutionOption in stepResolutionOptions" v-bind:key="stepResolutionOption.value" v-bind:value="stepResolutionOption.value">
            {{stepResolutionOption.text}}
            </md-option>
          </md-select>
        </md-field>
      </md-card-content>
      <md-card-actions md-alignment="space-between">
        <md-button class="md-raised md-accent">Restore default values</md-button>
        <md-button>Save</md-button>
      </md-card-actions>
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
import { store } from '../store';

export default {
  name: 'Configure',
  data () {
    return {
      positiveAngle: store.state.positiveAngle,
      negativeAngle: 90.0,
      position: 23.0,
      origin: 0.0,
      reductionRate: 6.0,
      stepResolution: 1,
      stepResolutionOptions: [
        { text: 'Full step', value: 1 },
        { text: 'Half step', value: 0.5 },
        { text: 'Quarter step', value: 0.25 },
        { text: 'Eighth step', value: 0.125 },
        { text: 'Sixteenth step', value: 0.125 }
      ]
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
