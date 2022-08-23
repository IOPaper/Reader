<template>
    <n-loading-bar-provider>
        <n-config-provider :theme-overrides="{common: {fontWeightStrong: '600'}}">
            <router-view class="page-style" />
            <n-back-top :right="100"/>
        </n-config-provider>
    </n-loading-bar-provider>
</template>

<script setup lang="ts">
</script>

<style>
.page-style {
    width: 50%;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
::-webkit-scrollbar {
    width: 20px;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}
</style>
