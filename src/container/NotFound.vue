<template>
    <n-result
        style="transform: translate(0, 50%)"
        status="404"
        title="404 资源不存在"
        description="生活总归带点荒谬"
        :size="resultSize"
    >
        <template #footer>
            <n-button @click="LeZi">找点乐子吧</n-button>
        </template>
    </n-result>
</template>

<script>
import {ref} from 'vue'

export default {
    name: "NotFound",
    setup() {
        let resultSize = ref('medium')
        return {
            resultSize,
            ...{
               LeZi() {
                   switch (resultSize.value) {
                       case 'medium':
                           resultSize.value = 'large'
                           break
                       case 'large':
                           resultSize.value = 'huge'
                           break
                       case 'huge':
                           resultSize.value = 'medium'
                       default:
                           resultSize.value = 'medium'
                   }
               }
            }
        }
    }
}
</script>

<style scoped>

</style>
