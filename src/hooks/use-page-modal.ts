import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  // 1.新建、编辑、删除的逻辑
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleNewData = () => {
    // console.log('user组件点击新建')
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    console.log('user组件点击编辑', item)
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb()
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
