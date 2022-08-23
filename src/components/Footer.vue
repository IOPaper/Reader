<template>
    <n-layout class="paper-footer">
        <n-layout-header>
            <n-divider v-if="!this['$config'].footer.copyright.disable">
                Copyright ©
                {{ this['$config'].footer.copyright.startYear }} - {{ new Date().getFullYear() }}
                {{ this['$config'].footer.copyright.holder }}.
                All Rights Reserved.
                {{ this['$config'].footer.copyright.more }}
            </n-divider>
        </n-layout-header>
        <n-layout-content v-html="footer"></n-layout-content>
    </n-layout>
</template>

<script lang="ts">
import { ref } from 'vue'
import { marked } from 'marked'

export default {
    name: "Footer",
    data() {
        return {
            markdown: this['$config'].footer.markdown
        }
    },
    setup() {
        let footer = ref()
        return {
            footer,
            ... {
                compileFooter(content: string): void {
                    if (!content) {
                        return
                    }
                    marked.setOptions({
                        renderer: new marked.Renderer(),
                        gfm: true,
                        breaks: true,
                        pedantic: false,
                        sanitize: false,
                        smartypants: true,
                    })
                    footer.value = marked(content)
                }
            }
        }
    },
    created() {
        this.compileFooter(this['$config'].footer.markdown)
    }
}
</script>

<style scoped>
.paper-footer {
}
</style>
