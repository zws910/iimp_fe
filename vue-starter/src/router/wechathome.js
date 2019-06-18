import LayoutBlank from '@/layout/LayoutBlank'

export default [{
  path: '/wechathome',
  component: LayoutBlank,
  children: [{
    path: '',
    component: () => import('@/components/Wechathome')
  }]
}]
