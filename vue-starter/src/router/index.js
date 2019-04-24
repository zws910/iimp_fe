import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts

// Routes
import homeRoutes from './home'
import timelineRoutes from './timeline'
import editorsRoutes from './editors'
import authRoutes from './authentication'

Vue.use(Router)
Vue.use(Meta)

const ROUTES = [
  // Default route
  { path: '', redirect: '/home' }
]
  .concat(homeRoutes)
  .concat(timelineRoutes)
  .concat(editorsRoutes)
  .concat(authRoutes)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: ROUTES
})

router.afterEach(() => {
  // On small screens collapse sidenav
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }

  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  // Set loading state
  document.body.classList.add('app-loading')

  // Add tiny timeout to finish page transition
  setTimeout(() => next(), 10)
})

export default router
