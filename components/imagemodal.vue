<script lang="ts" setup>
const modal = useModal()
defineProps({
    image: {
        type: String,
    }
})

function closeModal() {
    modal.close()
}

</script>

<template>
    <UModal :ui="{ container: 'items-center justify-center text-center', overlay: { background: 'dark:bg-green-100/30' } }">
        <div class="absolute top-5 right-5"  >
            <UButton color="white" label="" trailing-icon="eva:close-outline" @click="closeModal" ></UButton>   
        </div>
        <div class="flex items-center justify-center py-3 ">
            <NuxtImg :src="image" style="max-height: 500px;" />
        </div>
    </UModal>
</template>
