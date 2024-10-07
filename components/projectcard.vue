<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { Project } from "~/lib/projects.data";
import imagemodal from '~/components/imagemodal.vue';

export default defineComponent({
    props: {
        project: {
            type: Object as PropType<Project>,
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
});
</script>

<template>
    <UCard
        class="col-span-1 border border-green-700 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700">
        <div class="flex flex-col lg:flex-row">
            <div class="flex flex-col w-full mb-4">
                <!-- Icono y detalles del proyecto -->
                <div class="flex items-center mb-2">
                    <NuxtImg :src="project.icon" :alt="project.proyecto" @click="openModal(project.icon)"
                        class="w-10 h-10 rounded-full mr-4" />
                    <div class="flex flex-col">
                        <h3 class="text-2xl mb-1">{{ project.proyecto }}</h3>
                        <p class="text-gray-400">{{ project.empresa }}</p>
                    </div>
                </div>
                <!-- Descripción del proyecto -->
                <p class="text-gray-500 dark:text-gray-300 mb-2">{{ project.descripcion }}</p>
                <!-- Lenguajes utilizados -->
                <div class="flex flex-wrap gap-2 mb-2">
                    <span v-for="tech in project.lenguajes" :key="tech"
                        class="bg-green-50 dark:bg-gray-800 text-green-500 text-xs py-1 px-2 rounded">
                        {{ tech }}
                    </span>
                </div>
                <!-- Links del proyecto -->
                <div class="flex gap-2 mb-2">
                    <div v-for="link in project.links" :key="link.url"
                        class="flex items-center justify-center border border-green-700 rounded-full w-7 h-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-gray-700">
                        <UTooltip :text="link.text" :popper="{ placement: 'top' }">
                            <ULink class="w-5 h-5" v-if="link.url" :to="link.url">
                                <UIcon :name="link.icon" class="w-5 h-5" />
                            </ULink>
                        </UTooltip>
                    </div>
                </div>
            </div>
            <!-- Imagen del proyecto -->
            <div class="flex w-full items-center justify-center" @click="openModal(project.imagen)">
                <NuxtImg :src="project.imagen" :alt="project.proyecto" class="w-64 h-64 object-cover" />
            </div>
        </div>
    </UCard>
</template>
