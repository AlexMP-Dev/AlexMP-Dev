<template>
    <div>
        <navbar />
        <div class="w-full h-full">
            <slot />
        </div>
        <footer class="w-full bg-gray-50 dark:bg-gray-900 bottom-0 fixed">
            <div class="flex items-center justify-center  ">
                <h3 class="text-gray-500 dark:text-gray-300">&copy; 2024 Make with ❤️ By AlexMP-Dev
                </h3>
            </div>
        </footer>
    </div>
</template>