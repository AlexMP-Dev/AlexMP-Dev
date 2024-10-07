<script lang="ts">
import { type Certificate } from '~/lib/certificates.data';
import { defineComponent, type PropType } from "vue";
import imagemodal from '~/components/imagemodal.vue';

export default defineComponent({
    props: {
        certficate: {
            type: Object as PropType<Certificate>,
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
    <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } }"
        class=" border border-green-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700">
        <div class=" h-52 overflow-hidden cursor-pointer rounded-t-lg" @click="openModal(certficate.img)">
            <NuxtImg :src="certficate.img" :alt="certficate.titulo"
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div class="p-4">
            <h3 class="text-lg text-white mb-2">{{ certficate.titulo }}</h3>
            <p class="text-sm text-green-500 mb-1">{{ certficate.empresa }}</p>
            <p class="text-sm text-gray-400">{{ certficate.fecha }}</p>
        </div>
    </UCard>
</template>