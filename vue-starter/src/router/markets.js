import Layout2 from '@/layout/Layout2'

export default [{
  path: '/markets',
  component: Layout2,
  children: [
    {
      path: 'unusual',
      component: () => import('@/components/markets/Unusual.vue')
    },
    {
    path: 'daily-abnormal',
    component: () => import('@/components/markets/Abnormal.vue')
    }
  ]
}]
