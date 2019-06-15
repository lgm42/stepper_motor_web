import Vue from 'vue'
import Router from 'vue-router'
import Monitor from '@/components/Monitor'
import Control from '@/components/Control'
import Configure from '@/components/Configure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Monitor',
      component: Monitor
    },
    {
      path: '/control',
      name: 'Control',
      component: Control
    },
    {
      path: '/configure',
      name: 'Configure',
      component: Configure
    }
  ]
})
