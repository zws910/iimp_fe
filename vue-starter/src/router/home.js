import Layout2 from '@/layout/Layout2'

export default [{
  path: '/home',
  component: Layout2,
  children: [{
    path: '',
    component: () => import('@/components/Home')
  }]
}]
