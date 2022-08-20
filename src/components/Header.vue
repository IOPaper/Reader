<template>
   <n-space vertical>
       <n-gradient-text
           size=120
           :gradient="this.$config.home.titleGradientRGB"
       >{{this.$config.home.title}}</n-gradient-text>
        <n-space justify="space-between">
            <n-h2>{{this.$config.home.subtitle}}</n-h2>
        </n-space>
   </n-space>
</template>

<script>

export default {
    name: "Header",
}
</script>

<style scoped>

</style>
