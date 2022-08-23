<template>
   <n-space vertical>
       <template v-if="backToHome">
           <router-link to="/">
               <n-gradient-text
                   size=120
                   :gradient="this['$config'].header.gradientRGB"
               >{{this['$config'].header.title}}</n-gradient-text>
           </router-link>
       </template>
       <template v-else>
           <n-gradient-text
               size=120
               :gradient="this['$config'].header.gradientRGB"
           >{{this['$config'].header.title}}</n-gradient-text>
       </template>
       <n-space v-if="!subHide" justify="space-between">
           <n-h2>{{this['$config'].header.subtitle}}</n-h2>
       </n-space>
   </n-space>
</template>

<script lang="ts">
export default {
    name: "Header",
    props: {
        subHide: {
            type: Boolean,
            required: false,
            default: false
        },
        backToHome: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
