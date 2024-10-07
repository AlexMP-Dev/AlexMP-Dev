<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: {
        nombre: String,
        url: String
    },
    setup(props) {
        return {
            nombre: props.nombre as string,
            url: props.url
        }
    }
})
</script>
<template>
    <ULink
        class="inline-flex items-center justify-center px-2 py-2 text-base text-center border-2 rounded-full border-green-700 text-green-700 dark:hover:text-white hover:border-green-400 hover:shadow-md hover:shadow-green-400"
        :to="url" target="_blank">
        <UIcon :name="nombre" class="w-6 h-6 " />
    </ULink>
</template>