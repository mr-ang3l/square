<script setup>
import {RouterLink} from 'vue-router';

</script>

<template>
  <main class="login">
    <a class="about" href="https://www.google.com/" target="blank">?</a>
    <h1 class="title">SQUARE</h1>
    <div class="input">
      <div class="input-title">
        Login /
        <a class="join" href="https://www.google.com/" target="blank">Join?</a>
      </div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <!-- input type="submit" value=">>>>"/ -->
      <RouterLink  :to="{name: 'Profile'}" > >>>> </RouterLink>
    </div>
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

/* . > * {
  border: solid blue 1px;
} */

.about {
  z-index: 2;
  width: 100%;
  height: fit-content;
  padding-inline: .5em;
  grid-column: 1;
  grid-row: 1;
  font-size: 1.5em;
  text-align: right;
  font-weight: bold;
  color: #0001fc;
}

.login {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

.title {
  width: 100%;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  align-self: end;
  font-family: 'Nikea';
  font-size: clamp(1rem, 1.5rem + 10.333vh, 10rem);
  color: #0001fc;
  cursor: default;
  background-image: url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHVzbDQxdjBraHF4N2huNXg4azVkNWZ2YXlxbGVkaDc5bDh0MzdiOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8w61HSu6xQjoa2NzKN/giphy.gif);
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 1, 252, .5);
}

.input {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type='email'],
input[type='password'] {
  margin: 0.5em;
  padding-block: 0.2em;
  font-family: 'Helvetica';
  border: 1px solid black;
  border-radius: 0;
}

textarea:focus,
input:focus,
input[type='email']:focus,
input[type='email']:active {
  outline: none;
  text-decoration: none;
  border: 1px #0001fc solid;
}

input[type='submit'] {
  margin: 1em;
  font-family: 'Helvetica';
  font-weight: normal;
  border: 0;
  background-color: transparent;
  color: #0001fc;
  cursor: pointer;
}

.input-title {
  width: auto;
  text-align: center;
  font-size: 1.5em;
  font-family: 'Nikea';
  color: #0001fc;
  cursor: default;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #0001fc;
  transition: all 70ms ease-in;
}

a:hover,
a:active {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0001fc;
  color: white;
}

.join {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0001fc;
  color: white;
}

.join:hover {
  text-decoration: none;
  cursor: pointer;
  color: #0001fc;
  transition: all 55ms ease-in;
}

@media only screen and (max-width: 500px) {
  .title {
    font-size: clamp(1rem, 1.5rem + 8.333vw, 10rem);
  }
}

</style>
