<script setup>
	import { ref, onMounted } from 'vue'

	var eye = ref()

	function toggleView () {
		if (eye.value.type === "password") {
			eye.value.type = "text";
		} else {
			eye.value.type = "password";
		}
		console.log(eye.value.type)
	}
</script>

<template>
	<form >
		<label for="name">First name</label>
		<input type="text" id="f-name" name="name">
		<label for="l-name">Last name</label>
		<input type="text" id="l-name" name="l-name">
		<label for="email">Mail</label>
		<input type="email" id="email" name="email">
		<label for="password">Password</label>
		<input type="password" name="password">
		<label for="r-password">Re-Enter Password</label>
		<input type="password" name="r-password">
		<input type="submit" id="r-submit" name="r-submit" value="Submit">
		<p>▽</p>
	</form>
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

form {
  height: 100%;
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #0001fc;
}

label{
	font-family: 'Nikea';
}

input {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
	margin: 0.5em;
	padding-block: 0.2em;
	font-family: 'Helvetica';
	border: 1px solid black;
	border-radius: 0;
	transition: all 75ms ease-in;
}

input:focus, input[type='submit']:hover {
  outline: none;
  text-decoration: none;
	color: #0001fc;
	-webkit-text-stroke-width: 0px;
}

input[type='submit'] {
  margin: 1em;
  font-family: 'Nikea';
  border: transparent;
  background-color: transparent;
	-webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0001fc;
  color: white;
  cursor: pointer;
}

</style>