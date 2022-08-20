<template>

</template>

<script>
import { useRoute } from 'vue-router'

export default {
    name: "Paper",
    setup() {

    },
    created() {
        document.title = useRoute().params.paperId
    }
}
</script>

<style scoped>

</style>
