<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
    <main class="settings_grid">
        <RouterLink  to="/profile">Me</RouterLink>
        <a href="">Invite?</a>
        <a href="">Add?</a>
        <a href="">Followers</a>
        <a href="">Following</a>
        <a href="">Square</a>
        <a href="">Settings</a>
        <RouterLink  to="/">Exit</RouterLink>
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
        font-family: Helvetica;
    }

    .settings_grid > * {
        margin: 0;
        padding: 0;
        margin-block: 1px;
        text-decoration: none;
        font-size: 1.5em;
        color: #0001fc;
    }

    a:hover {
        color: #8787da;
    }
</style>