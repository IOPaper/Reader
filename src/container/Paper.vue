<template>
    <n-layout class="paper-layout">
        <n-layout-header>
            <Header :back-to-home="true" :sub-hide="true" />
        </n-layout-header>
        <n-layout-content>
            <n-layout v-if="!loading.status">
                <n-layout-header>
                    <n-tooltip trigger="hover" placement="top-start">
                        <template #trigger>
                            <n-h1 prefix="bar">
                                <n-text type="primary">
                                    {{ paper.title }}
                                </n-text>
                            </n-h1>
                        </template>
                        {{ paper.title }}
                    </n-tooltip>
                    <n-space vertical>
                        <n-time format="yyyy/MM/dd HH:mm" :time="new Date(paper.date_create)"></n-time>
                        <n-badge class="paper-author-avatar" dot :type="paper.sign ? 'success' : 'warning'">
                            <n-avatar size="large">{{ paper.author }}</n-avatar>
                        </n-badge>
                    </n-space>
                </n-layout-header>
                <n-layout-content class="paper-content" v-html="paperBody" />
            </n-layout>
            <template v-if="loading.error">
                <n-alert type="error" title="获取paper内容失败">
                    {{ loading.error }}
                </n-alert>
            </template>
        </n-layout-content>
        <n-layout-footer>
            <Footer/>
        </n-layout-footer>
    </n-layout>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

// import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'

import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { GetPaper } from '@/apis'

import {marked} from 'marked'
import highlightJS from 'highlight.js'
import 'highlight.js/styles/foundation.css'

export default {
    name: "Paper",
    components: {
        Header,
        Footer
    },
    data() {
        return {
            paperId: useRoute().params.paperId,
        }
    },
    setup() {
        let paper = ref<string>()
        let paperBody = ref()
        let loading = ref({
            status: true,
            error: ''
        })
        return {
            paper,
            paperBody,
            loading,
            ...{
                compilePaper(content = '') {
                    marked.setOptions({
                        renderer: new marked.Renderer(),
                        gfm: true,
                        breaks: true,
                        pedantic: false,
                        sanitize: false,
                        smartypants: true,
                        langPrefix: 'hljs language-',
                        highlight: (code, lang) => highlightJS.highlight(code, {
                            language: lang
                        }).value
                    })
                    paperBody.value = marked(content)
                },
                getPaper(paperId = '') {
                    GetPaper(paperId).then((r) => {
                        if (!r.status) {
                            loading.value.error = r.data
                            return
                        }
                        document.title = r.data.title
                        paper.value = r.data
                        this.compilePaper(r.data.content)
                        loading.value.status = false
                    })
                },
            }
        }
    },
    created() {
        this.getPaper(this.paperId)
    }
}
</script>

<style scoped>
.paper-layout {
    margin-top: 45px;
}
.paper-author-avatar {
    margin-top: 10px;
}
.paper-content {
    margin-top: 35px;
    margin-bottom: 10px;
}
</style>
