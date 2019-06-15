<template>
  <div id="app" class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <span class="md-title">Stepper Motor Control</span>
          </div>
          <div class="md-toolbar-section-end">
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-alignment="centered">
            <md-tab id="tab-home" md-icon="dashboard" md-label="Monitor" to="/" exact></md-tab>
            <md-tab id="tab-pages" md-icon="tune" md-label="Control" to="/Control"></md-tab>
            <md-tab id="tab-posts" md-icon="settings" md-label="Configure" to="/Configure"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

    .md-tabs + .md-tabs {
    margin-top: 24px;
  }

  #app {
    text-align: center;
    color: #2c3e50;
}
</style>
