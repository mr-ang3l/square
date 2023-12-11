<script setup>
	import { ref, reactive } from 'vue'

	let eye = ref()

	const toggle = reactive({
		match: true,
		unmatch: false
	});

	const password = ref('');
	const password2 = ref('');

	function toggleView () {
		if (eye.value.type === "password") {
			eye.value.type = "text";
		} else {
			eye.value.type = "password";
		}
		console.log(eye.value.type)
	}

	function passEqual() {
		if (password.value === password2.value) {
			toggle.match = true;
			toggle.unmatch = false; 
		} else {
			toggle.match = false;
			toggle.unmatch = true;
		}
	}


</script>

<template>
	<form >
		<label for="name">First name</label>
		<input type="text" id="f-name" name="name" autocomplete="cc-given-name">
		<label for="l-name">Last name</label>
		<input type="text" id="l-name" name="l-name" autocomplete="cc-family-name">
		<label for="email">Mail</label>
		<input type="email" id="email" name="email" autocomplete="email">
		<label for="password">Password</label>
		<input v-model="password" @input="passEqual"  type="password" name="password" :class="toggle" autocomplete="new-password">
		<label for="r-password">Re-Enter Password</label>
		<input v-model="password2" @input="passEqual"  type="password" name="r-password" :class="toggle" autocomplete="new-password">
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

.match {
	border: 1px solid green;
}

.unmatch {
	border: 1px solid red;
}

</style>