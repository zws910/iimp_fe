import Layout2 from '@/layout/Layout2'

export default [{
  path: '/timeline',
  component: Layout2,
  children: [{
    path: '',
    component: () => import('@/components/Timeline2')
  }]
}]
