<script setup lang="ts">

import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
    name: z.string().min(3, 'Must be at least 3 characters'),
    email: z.string().email('Invalid email'),
    messaje: z.string(),
});

type Schema = z.output<typeof schema>

const state = reactive({
    name: undefined,
    email: undefined,
    messaje: undefined
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    event.preventDefault();

    // Crear el cuerpo del correo electrónico
    const subject = encodeURIComponent('Nuevo mensaje de contacto');
    const body = encodeURIComponent(`Nombre: ${event.data.name}\nEmail: ${event.data.email}\nMensaje: ${event.data.messaje}`);

    const mailtoLink = `mailto:e70205523@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}

</script>
<template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

        <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" autocomplete="name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" autocomplete="email" />
        </UFormGroup>

        <UFormGroup label="messaje" name="messaje">
            <UTextarea v-model="state.messaje" />
        </UFormGroup>

        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>