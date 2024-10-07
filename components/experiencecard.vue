<script lang="ts">
import { type Expirience } from "~/lib/expirience.data";
import { defineComponent, type PropType } from "vue";
import imagemodal from '~/components/imagemodal.vue';

export default defineComponent({
    props: {
        experience: {
            type: Object as PropType<Expirience>,
            required: true
        }
    },
    setup(props) {
        const modal = useModal()
        const openModal = (image: string) => {
            modal.open(imagemodal, {
                image
            });
        };

        return {
            openModal
        };
    }
})

</script>

<template>
    <UCard
        class="border border-green-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700">
        <p class="text-sm text-center text-green-900 mb-3">{{ experience.periodo }}</p>
        <div class="flex items-center justify-center mb-3" @click="openModal(experience.img)">
            <NuxtImg class="w-10 h-10 rounded-lg" :src="experience.img" alt="mockup" />
        </div>
        <h2 class="text-xl text-center font-bold mb-3">{{ experience.titulo }}</h2>
        <p class="text-left text-gray-500 dark:text-gray-300 mb-3">{{ experience.cargo }}</p>
        <p v-if="experience.descripcion" class="text-left text-xs text-gray-400 dark:text-gray-300">
            {{
                experience.descripcion }}</p>
    </UCard>
</template>