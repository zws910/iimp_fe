import LayoutBlank from '@/layout/LayoutBlank'

export default [{
  path: '/authentication',
  component: LayoutBlank,
  children: [
    {
    path: 'login',
    component: () => import('@/components/authentication/Login.vue')
  },
  {
    path: 'register',
    component: () => import('@/components/authentication/Register.vue')
  }
]
}]
