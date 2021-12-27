import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
    // console.log('user.vue点击搜索按钮:', queryInfo)
  }

  return [pageContentRef, handleResetClick, handleQueryClick]
}
