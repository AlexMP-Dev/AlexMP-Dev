<script lang="ts">
import type { Skill } from '~/lib/skills.data';


export default defineComponent({
    props: {
        skill: {
            type: Object as PropType<Skill>,
            required: true
        }
    },
    setup(props) {
         return {
             
         }   
    }
})

</script>
<template>
    <UCard
        class="border border-green-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700"
        :ui="{ background: 'bg-white dark:bg-gray-800' }" >
        <div class="flex items-center justify-center space-x-2">
            <NuxtImg :src="skill.icon" class="max-w-6" />
            <p class="text-center text-nowrap text-xl font-bold text-green-700 dark:text-green-400">{{
                skill.name }}</p>
        </div>
    </UCard>
</template>