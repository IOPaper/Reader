<template>
    <n-space vertical item-style="margin-bottom: 30px">
        <template v-for="item in paper" :key="item.paperId">
            <PaperDescriptionCard
                :title="item.title"
                :bordered="item.bordered"
                :preview="item.preview"
                :introduction="item.introduction"
                :paperId="item.paperId"
            />
        </template>
    </n-space>
</template>

<script>
import PaperDescriptionCard from "../components/PaperDescriptionCard.vue";

export default {
    name: "PaperList",
    components: {PaperDescriptionCard},
    data() {
        return {
            paper: [
                {
                    title: '📖 how to winner',
                    preview: 'https://www.dmoe.cc/random.php',
                    introduction: 'If you are not 996 when you are young, when can you be 996?You have not been 996 all your life and you think you are proud of it? In this world, every one of us wants to be successful, wants a good life, wants to be respected, I ask everyone, how can you achieve the success you want without putting in more effort and time than others?',
                    paperId: 'how-to-winner'
                }, {
                    title: '❌ no one will ever be a winner',
                    preview: 'https://api.mtyqx.cn/api/random.php',
                    introduction: "1、Only what I can't think of can't be done. 2、Success and wealth flowed to me in large quantities. 3、Opportunities for success and wealth are constantly attracted to me. 4、It is not what happens, but what to do to improve it. 5、Set a goal that can be reached and has a deadline. 6、Lend your strength to make less effort. 7、As long as the daily progress will begin to progress. 8、As long as you keep a grateful heart to people, things and things, you will definitely be a big success. 9、Every day, meditate. 10、Be sure to keep expanding your social circle.",
                    paperId: 'no-one-will-ever-be-a-winner'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
