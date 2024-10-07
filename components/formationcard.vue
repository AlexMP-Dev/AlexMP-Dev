<script lang="ts">
import type { Formation } from '~/lib/formation.data';
import { defineComponent, type PropType } from "vue";
import imagemodal from '~/components/imagemodal.vue';

export default defineComponent({
    props: {
        formation: {
            type: Object as PropType<Formation>,
            required: true
        }
    },

    setup() {
        const modal = useModal()

        const openModal = (image: string) => {
            modal.open(imagemodal, {
                image
            })
        }

        return {
            openModal
        }
    }
})


</script>

<template>
    <UCard 
        class=" border border-green-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700">
        <p class="text-sm text-center text-green-900 mb-3">{{ formation.periodo }}</p>
        <div class="flex items-center justify-center mb-3" @click="openModal(formation.img)">
            <NuxtImg class="w-10 h-10 rounded-lg " :src="formation.img" alt="mockup" />
        </div>
        <h2 class="text-xl text-center font-bold mb-3">{{ formation.titulo }}</h2>
        <p class="text-left mb-2 text-gray-500 dark:text-gray-300">{{ formation.curso }}</p>
        <p v-if="formation.descripcion" class="text-left text-xs text-gray-400 dark:text-gray-300">
            {{
                formation.descripcion }}</p>
    </UCard>
</template>