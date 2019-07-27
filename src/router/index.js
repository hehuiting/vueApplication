import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Content from '@/pages/content'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          component: Content
        }

      ]
    }
  ]
})
