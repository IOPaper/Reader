<template>
    <n-layout class="paper-layout">
        <n-layout-header>
            <Header/>
        </n-layout-header>
        <n-layout-content>
            <PaperList/>
            <template>
                <n-back-top :right="100" />
            </template>
        </n-layout-content>
    </n-layout>
</template>

<script>
import Header from "../components/Header.vue";
import PaperList from "../components/PaperList.vue";
export default {
    name: "Container",
    components: {Header, PaperList}
}
</script>

<style scoped>
.paper-layout {
    margin-top: 45px;
}

</style>
