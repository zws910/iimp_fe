import Layout2 from '@/layout/Layout2'

export default [{
  path: '/test',
  component: Layout2,
  children: [
    {
      path: '',
      component: () => import('@/components/test.vue')
    }
    // {
    //   path: 'register',
    //   component: () => import('@/components/authentication/Register.vue')
    // }
  ]
}]
