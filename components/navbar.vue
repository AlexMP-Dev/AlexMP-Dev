<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { pages } from '~/lib/navs.data';

const activeSection = ref<string | null>(null);
onMounted(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id;
                }
            });
        },
        { threshold: 0.8 } // Detectar cuando la mitad de la sección está visible
    );

    sections.forEach((section) => observer.observe(section));

    // Limpieza
    onUnmounted(() => {
        sections.forEach((section) => observer.unobserve(section));
    });
});
</script>
<template>
    <nav
        class="fixed top-0 left-0 right-0 z-10 bg-white shadow-md dark:bg-gray-900  dark:shadow-md dark:shadow-gray-700">
        <div class="flex container mx-auto px-4 py-3 items-center justify-between">
            <ULink to="/" class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                    <UIcon name="eva:code-outline" class="w-6 h-6 text-white" />
                </div>
                <span class="font-bold text-xl text-green-900 dark:text-green-100">AlexMP-Dev</span>
            </ULink>
            <div class="hidden lg:flex space-x-4 ">
                <ULink v-for="page in pages" 
                :class="{'text-green-400': activeSection === page.url.slice(1),  // Si la sección es visible
                    'text-gray-900 dark:text-gray-300': activeSection !== page.url.slice(1)
                }" :to="page.url" class="hover:text-green-400">{{ page.name }}</ULink>
            </div>
            <div class="flex space-x-2">
                <Toggletheme />
                <Dropdawnnav class="lg:hidden " />
            </div>
        </div>
    </nav>
</template>