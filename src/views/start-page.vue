<template>
     <main class="wrapper">
        <h1 class="title">SQUARE</h1>
        <div class="input">
            <div class="input-title">Login</div>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="submit" value="Send">
        </div>
     </main>
</template>

<style scoped>
    .wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[type=email], input[type=password] {
        margin: .5em;
        padding-block: .2em;
        font-family: 'Helvetica';
        border: 1px solid black;
        border-radius: 0;
    }
    
    input[type=submit] {
        margin: 1em;
        font-family: 'Helvetica';
        font-weight: bold;
        border: 0;
        background-color: transparent;
        color: #0001FC;
        cursor: pointer;
    }

    .input-title {
        width: fit-content;
        text-align: center;
        font-size: 1.5em;
        font-family: 'Nikea';
        color: #0001FC;
        cursor: default;
    }

    .title {
        width: fit-content;
        text-align: center;
        color: #0001FC;
        font-family: 'Nikea';
        font-size: clamp(1rem, 1.5rem + 10.333vh, 10rem);
        cursor: default;
    }
</style>