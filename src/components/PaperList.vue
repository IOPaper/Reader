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
import {ref} from 'vue'
import PaperDescriptionCard from "./PaperDescriptionCard.vue";
import {GetPaperList} from "../apis/index.js";

export default {
    name: "PaperList",
    components: {PaperDescriptionCard},
    data() {
        return {
            paper: [
                {
                    title: '📖 如何成功',
                    preview: 'https://www.dmoe.cc/random.php',
                    introduction: '如果你年轻的时候不 996，你什么时候可以 996？你一辈子没有 996，你觉得你就很骄傲了？这个世界上，我们每一个人都希望成功，都希望美好生活，都希望被尊重，我请问大家，你不付出超越别人的努力和时间，你怎么能够实现你想要的成功？',
                    paperId: 'how-to-cheng-gong'
                }, {
                    title: '❌ 永远没有成功',
                    preview: 'https://api.mtyqx.cn/api/random.php',
                    introduction: '1、只有想不到没有做不到的。\n' +
                        '\n' +
                        '2、成功和财富大量地流到我身边。\n' +
                        '\n' +
                        '3、成功致富的机会不断地被我吸引而来。\n' +
                        '\n' +
                        '4、重要的不是发生了什么，而是做哪些事来改善它。\n' +
                        '\n' +
                        '5、设定一个可以达成而且有期限的目标。\n' +
                        '\n' +
                        '6、借力使力少费力。\n' +
                        '\n' +
                        '7、只要每天进步就开始进步了。\n' +
                        '\n' +
                        '8、凡是只要对人、事、物保持一颗感恩的心，就一定会大成功。\n' +
                        '\n' +
                        '9、每天都要静坐。\n' +
                        '\n' +
                        '10、一定要不断扩大自己的社交圈。',
                    paperId: 'never-mei-you-cheng-gong'
                }
            ]
        }
    },
    setup() {
        let paperList = ref([])
        return {
            paperList,
            ...{
               getPaperList() {
                   GetPaperList().then((r) => {
                       console.log(r)
                   })
               }
            }
        }
    },
    created() {
        this.getPaperList()
    }
}
</script>

<style scoped>

</style>
