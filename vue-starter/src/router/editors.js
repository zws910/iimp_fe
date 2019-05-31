import Layout2 from '@/layout/Layout2'

export default [{
  path: '/editors',
  component: Layout2,
  children: [{
    path: 'info',
    component: () => import('@/components/editors/EditorsInfo.vue')
  }, {
    path: 'focus',
    component: () => import('@/components/editors/EditorsFocus.vue')
  }, {
    path: 'events/:id',
    component: () => import('@/components/editors/EditorsEvents.vue')
  }]
}]
