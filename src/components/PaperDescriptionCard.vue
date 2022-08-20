<template>
    <n-card
        :title="title"
        embedded
        class="paper-card"
        :bordered="bordered"
        @click="goto"
    >
        <template v-if="preview" #cover>
            <n-image class="paper-card-image" :src="preview" object-fit="cover"/>
        </template>
        <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
            {{introduction}}
        </n-ellipsis>
    </n-card>
</template>

<script>
import {getCurrentInstance} from "vue";

export default {
    name: "PaperDescriptionCard",
    props: {
        title: {
            type: String,
            required: true
        },
        bordered: {
            type: Boolean,
            required: false,
            default: false
        },
        preview: {
            type: String,
            required: false,
            default: ""
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
    setup() {
        const data = getCurrentInstance()
        const methods = {
            goto() {
                console.log(data.props.paperId)
            }
        }
        return {
            ...methods
        }
    }
}
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
