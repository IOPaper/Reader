<template>
    <n-card
        :title="title"
        embedded
        class="paper-card"
        :bordered="false"
        @click="goto"
    >
        <template v-slot:header-extra="">
            <n-space>
                <n-tag round :bordered="false" v-for="item in tags" :key="item">
                    <n-text depth="1">{{ item }}</n-text>
                </n-tag>
            </n-space>
        </template>
        <template v-if="preview" #cover>
            <n-image class="paper-card-image" :src="preview" object-fit="cover"/>
        </template>
        <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
            {{introduction}}
        </n-ellipsis>
    </n-card>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRouter} from 'vue-router'

export default defineComponent({
    name: "PaperDescriptionCard",
    props: {
        title: {
            type: String,
            required: true
        },
        preview: {
            type: String,
            required: false,
            default: ""
        },
        author: {
            type: String,
            required: true,
            default: '匿名'
        },
        tags: {
            type: Array,
            required: false,
        },
        introduction: {
            type: String,
            required: true
        },
        paperId: {
            type: String,
            required: true
        },
    },
    setup(props) {
        const router = useRouter()
        const methods = {
            goto() {
                router.push({
                    name: 'PaperReader',
                    params: {
                        paperId: props.paperId
                    }
                })
            }
        }
        return {
            ...methods
        }
    }
})
</script>

<style scoped>
.paper-card {
    background-color: #F5F5F5;
    border-radius: 1.5rem;
}
.paper-card:hover {
    background-color: #EEEEEE;
}

.paper-card-image {
    width: 100%;
    max-height: 10em;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
}
</style>
