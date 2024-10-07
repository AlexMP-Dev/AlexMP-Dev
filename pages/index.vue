<script setup lang="ts">

import { skills } from '~/lib/skills.data';
import { socialLinks } from '~/lib/socialliks.data';
import { expiriences } from '~/lib/expirience.data';
import { formations } from '~/lib/formation.data';
import { projects } from '~/lib/projects.data';
import { certificates } from '~/lib/certificates.data';

</script>
<template>
    <div>
        <section id="about" class="max-w-screen-xl px-4 sm:px-10 md:px-16  mx-auto h-auto pt-20">
            <div class="grid  lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7 w-full ">
                    <div class="lg:hidden flex mb-5 items-center justify-center"
                        style="filter: drop-shadow(0 0 10px rgb(21, 128, 61, 1));">
                        <NuxtImg class="max-w-52 mb-4" src="/yo.webp" alt="mockup" />
                    </div>
                    <p class="text-center lg:text-left lg:max-w-2xl mb-4 text-gray-500 dark:text-gray-300">Hi, I'm</p>
                    <h1
                        class="text-center lg:text-left lg:max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Elmer Alexis Muguerza Prieto</h1>
                    <p
                        class="text-center lg:text-left lg:max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
                        I am
                        passionate about technology and apps development. I love learning new technologies.
                        Currently
                        I
                        am still studying at university, I do freelance work for both web and mobile.</p>
                    <div class="flex space-x-4 justify-center lg:justify-start">
                        <Socialbutton :nombre="socialLink.name" :url="socialLink.url" v-for="socialLink in socialLinks"
                            :key="socialLink.name" />
                    </div>
                    <div class="flex justify-center lg:justify-start">
                        <ULink to="/CV.pdf" target="_blank"
                            class="mt-8 p-2 flex items-center border rounded-md border-green-700 text-green-700 hover:text-white hover:bg-green-700 hover:shadow-md hover:shadow-green-400 ">
                            Download CV
                            <UIcon name="eva:download-outline" class="ml-2 w-6 h-6 "></UIcon>
                        </ULink>
                    </div>
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <NuxtImg class="w-full" src="/yo.webp" alt="mockup"
                        style="filter: drop-shadow(0 0 10px rgb(21, 128, 61, 1));" />
                </div>
            </div>
        </section>

        <section id="skills" class="max-w-screen-xl px-4 sm:px-10 md:px-16 mx-auto h-auto pt-20">
            <h2
                class="text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Skills</h2>
            <div class="grid gap-5 py-8 grid-cols-2  md:grid-cols-3  md:py-12 lg:grid-cols-4 ">
                <Skillcard v-for="skill in skills" :key="skill.name" :skill="skill" />
            </div>
        </section>

        <section id="projects" class="max-w-screen-xl px-4 sm:px-10 md:px-16 mx-auto h-auto pt-20">
            <h2
                class="text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Projects</h2>
            <div class="grid gap-5 py-8 grid-cols-1 md:grid-cols-2">
                <Projectcard v-for="project in projects" :key="project.proyecto" :project="project" />
            </div>
        </section>

        <section id="experience" class="max-w-screen-xl px-4 sm:px-10 md:px-16 mx-auto h-auto pt-20">
            <h2
                class="text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Experience and Formation</h2>
            <div class="grid  lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7 w-full ">
                    <div class="flex flex-col space-y-5 sm:space-y-0 py-8 sm:grid sm:gap-3 sm:grid-cols-2 ">
                        <Experiencecard class="col-span-1" v-for="exp in expiriences" :key="exp.titulo"
                            :experience="exp" />
                    </div>
                </div>

                <UDivider class="hidden lg:flex lg:col-span-1 justify-center"
                    :ui="{ border: { base: 'border-gray-400 dark:border-gray-600' } }" label=""
                    orientation="vertical" />
                <UDivider class="flex lg:hidden mb-3" :ui="{ border: { base: 'border-gray-400 dark:border-gray-600' } }"
                    label="" />

                <div class="flex place-self-center py-8 lg:py-0 lg:mt-0 lg:col-span-4 ">
                    <Formationcard class="col-span-1" v-for="form in formations" :key="form.titulo" :formation="form" />
                </div>
            </div>
        </section>

        <section id="certificates" class="max-w-screen-xl px-4 sm:px-10 md:px-16 mx-auto min-h-screen pt-20">
            <h2
                class="text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Certificates</h2>
            <div class="py-8">

                <div class="certificate-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Certificatecard v-for="cert in certificates" :key="cert.titulo" :certficate="cert" />
                </div>
            </div>
        </section>

        <section id="contact" class="max-w-screen-xl px-4 sm:px-10 md:px-16 mx-auto min-h-screen pt-20">
            <h2
                class="text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Contact me</h2>
            <div class="py-8">
                <UCard class="border border-green-700">
                    <Formcontact />
                </UCard>
            </div>
        </section>
    </div>
</template>
