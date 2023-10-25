<script setup>
import {RouterLink} from 'vue-router';
</script>

<template>
    <main class="settings_grid">
        <section class="settings">
            <RouterLink  :to="{name: 'Profile'}">Me</RouterLink>
            <RouterLink  :to="{name: 'CenterInvite'}">Invite?</RouterLink>
            <RouterLink  :to="{name: 'CenterAdd'}">Add?</RouterLink>
            <RouterLink  class="users_count" :to="{name: 'CenterFollowers'}">Followers: {{ 4 }}</RouterLink>
            <RouterLink  class="users_count" :to="{name: 'CenterFollowing'}">Following: {{ 4 }}</RouterLink>
            <RouterLink  :to="{name: 'CenterSquare'}">Square</RouterLink>
            <RouterLink  :to="{name: 'CenterSettings'}">Settings</RouterLink>
            <RouterLink  :to="{name: 'Login'}">Exit</RouterLink>
        </section>
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
        align-items: center;
        justify-content: center;
        text-align: left;
        font-family: Helvetica;
    }

    .settings {
        display: flex;
        flex-direction: column;
    }

    .settings > * {
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