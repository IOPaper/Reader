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
        <n-layout-footer>
            <Footer/>
        </n-layout-footer>
    </n-layout>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PaperList from "../components/PaperList.vue";

export default {
    name: "Container",
    components: {
        Header,
        Footer,
        PaperList
    }
}
</script>

<style scoped>
.paper-layout {
    margin-top: 45px;
}
</style>
