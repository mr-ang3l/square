<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
    <main class="settings_grid">
        <RouterLink  :to="{name: 'Profile'}">Me</RouterLink>
        <RouterLink  :to="{name: 'CenterInvite'}">Invite?</RouterLink>
        <RouterLink  :to="{name: 'CenterAdd'}">Add?</RouterLink>

    </main>
</template>

<style scoped>
    @font-face {
    font-family: 'Helvetica';
    src: url('../assets/fonts/Helvetica-Font/Helvetica.ttf') format('truetype');
    }

    .settings_grid {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        font-family: Helvetica;
    }

    .settings_grid > * {
        width: 4em;
        margin: 0;
        padding: 0;
        text-align: left;
        text-decoration: none;
        font-size: 1.5em;
        color: #0001fc;
    }

    a:hover {
        color: #8787da;
    }
</style>