<template>
    <n-space vertical item-style="margin-bottom: 30px">
        <template v-if="loading.status">
            <n-spin :show="true" v-if="!loading.error">
                <PaperDescriptionCard title="" introduction="" paper-id="" author="" />
            </n-spin>
            <template v-if="loading.error">
                <n-alert type="error" title="获取paper列表失败">
                    {{ loading.error }}
                </n-alert>
            </template>
        </template>
        <template v-else v-for="item in paperList" :key="item.paperId">
            <PaperDescriptionCard
                :title="item.title"
                :author="item.author"
                :tags="item.tags"
                :introduction="item.content"
                :paperId="item.paper_id"
            />
        </template>
        <n-pagination style="justify-content: end" v-model:page="page" :page-count="100" />
    </n-space>
</template>

<script lang="ts">
import {ref} from 'vue'
import PaperDescriptionCard from "./PaperDescriptionCard.vue";
import {GetPaperList} from "../apis";

export default {
    name: "PaperList",
    components: {PaperDescriptionCard},
    setup() {
        let page = ref(1)
        let paperList = ref()
        let loading = ref({
            status: true,
            error: ''
        })
        return {
            page,
            paperList,
            loading,
            ...{
               getPaperList() {
                   GetPaperList().then((r) => {
                       if (!r.status) {
                           loading.value.error = r.data
                           return
                       }
                       paperList.value = r.data
                       loading.value.status = false
                   })
               }
            }
        }
    },
    created() {
        this.getPaperList()
    }
}
</script>

<style scoped>

</style>
