import { useStore } from '@/store'

export function usePermission(pageName: any, handleName: string) {
  const store = useStore()
  const permissions = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`

  return !!permissions.find((item: any) => item === verifyPermission)
}
