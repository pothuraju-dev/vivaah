import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const authStore = (useAuthStore())
  const { setAsGuest } = useAuthStore()
  await authStore.getSession()
  if ('profile_slug' in to.params && to.params.profile_slug) {
    setAsGuest()
  }
  // const isAuthPage = ['/login', '/register'].includes(to.path)

  if (to.path === '/add-profile' && !authStore.user) {
    return {
      name: '/login'
    }
  }
})

export default router
