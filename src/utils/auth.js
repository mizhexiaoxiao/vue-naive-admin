import { router } from '@/router'

export function toLogin() {
  router.replace({
    path: '/login',
    query: { ...router.currentRoute.value.query, redirect: router.currentRoute.value.path },
  })
}

export function toFourZeroFour() {
  router.replace({
    path: '/404',
  })
}
