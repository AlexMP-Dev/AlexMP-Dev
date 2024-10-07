<script setup lang="ts">
import { pages } from '~/lib/navs.data'

const lista = pages.map((page) => {
    return {
        label: page.name,
        icon: '',
        click: () => {
            navigateTo(page.url)
        }
    }
})

const items = [
    lista
]

</script>

<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start', }">
        <UButton color="white" label="" trailing-icon="eva:menu-fill" />
    </UDropdown>
</template>
