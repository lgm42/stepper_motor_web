<template>
  <div>
    <md-field>
      <label>Starting Angle</label>
      <md-input v-model="startAngle" type="number"></md-input>
    </md-field>
    <md-field>
      <label>Ending Angle</label>
      <md-input v-model="stopAngle" type="number"></md-input>
    </md-field>
    <md-field>
      <label>Home Position Angle</label>
      <md-input v-model="startAngle" type="number"></md-input>
    </md-field>
    <md-field>
      <label>Reduction rate</label>
      <md-input v-model="startAngle" type="number"></md-input>
    </md-field>

  </div>
</template>

<script>
export default {
  name: 'Configure',
  data () {
    return {
      startAngle: null,
      stopAngle: null
    }
  }
}
</script>

<style scoped>

</style>
