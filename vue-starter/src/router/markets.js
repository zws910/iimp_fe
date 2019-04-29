import Layout2 from '@/layout/Layout2'

export default [{
  path: '/markets',
  component: Layout2,
  children: [
    {
      path: 'unusual',
      component: () => import('@/components/markets/Unusual.vue')
    }
    // {
    // path: 'focus',
    // component: () => import('@/components/editors/EditorsFocus.vue')
    // }
  ]
}]
