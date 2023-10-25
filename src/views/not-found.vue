<template>
    <main>
        <h1>EEEEError 404</h1>
        <h2>page not found</h2>
        <RouterLink  :to="{name: 'Profile'}" > 🏠? </RouterLink>
    </main>
</template>

<style scoped>
    @font-face {
    font-family: 'Helvetica';
    src: url('../assets/fonts/Helvetica-Font/Helvetica.ttf') format('truetype');
    }

    @font-face {
    font-family: 'Nikea';
    src: url('../assets/fonts/nikea/NIKEA.otf') format('opentype');
    }

    main {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1, h2 {
        text-align: center;
        font-family: 'Nikea';
        color: #0001fc;
    }

    h1 {
        border-top: 1px #0001fc solid;
        border-right: 4px #0001fc solid;
        border-bottom: 1px #0001fc solid;
        padding-right: .5rem;
        padding-left: .5rem;
    }

    h2 {
        font-family: 'Helvetica';
    }

    a {
    margin-top: 5px;
    text-decoration: none;
    font-family: 'Helvetica';
    font-size: 2rem;
    cursor: pointer;
    color: #0001fc;
    transition: all 70ms ease-in;
    }
</style>