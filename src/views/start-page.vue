<template>
  <main class="login">
    <h1 class="title">SQUARE</h1>
    <div class="input">
    <div class="input-title">Login</div>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="submit" value="Send" />
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

.wrapper {
  height: 100%;
}

.wrapper >  *  {
  border: solid rgb(223, 59, 59)  1px;
}

.about {
  z-index: 2;
  width: 100%;
  color: black;
}

.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title {
  width: fit-content;
  text-align: center;
  color: #0001fc;
  font-family: 'Nikea';
  font-size: clamp(1rem, 1.5rem + 10.333vh, 10rem);
  cursor: default;
}

.input {
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
</style>
