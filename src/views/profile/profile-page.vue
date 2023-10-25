<script setup>
import {RouterLink} from 'vue-router';
import photosData from './photos.json';

const bPhotos = photosData.big;
const sPhotos = photosData.small;

</script>

<template>
  <main class="profile">
    <section class="name_grid">
      <a class="name" href="https://x.com/fredagainagain1?s=20" target="blank">Fred again...</a>
      <div class="profile_photo_container">
        <RouterLink  :to="{name: 'Center'}">
          <img alt="profile_photo" class="profile_photo" src="../../assets/img/profile_picture.webp"/>
        </RouterLink>
      </div>
    </section>
    <section class="photos_grid">
      <div class="big_photos_grid">
        <img class="photo" v-for="photo in bPhotos" :key="photo.id" :src="photo.source">
      </div>
      <div class="small_photos_grid">
        <img class="photo" v-for="photo in sPhotos" :key="photo.id" :src="photo.source">
      </div>
    </section>
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

.profile {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}

.name_grid {
  grid-column: 1 / 1;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  border-bottom: 1px solid black;
}

.name {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  text-align: center;
  align-self: center;
  text-decoration: none;
  color: #161616;
  text-shadow: 3px 2px aqua;
  font-family: Nikea;
  font-size: clamp(1rem, 1rem + 5.333vh, 10rem);
  transition: all 50ms cubic-bezier(0.0, 0.75, 0.98, 1);
}

.name:hover {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #0001fc;
  color: white;
  text-shadow: 3px 2px #161616;
}


.profile_photo_container {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}

.profile_photo {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.photos_grid {
  grid-column: 1 / 2;
  grid-row: 2 / 5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
}

.big_photos_grid {
  grid-column: 1 / 4;
  grid-row: 1 / 5;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 100%;
}

.small_photos_grid {
  grid-column: 1 / 4;
  grid-row: 5 / 7;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 100%;
}

.photo {
  border: 1px solid black;
  border-top: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  transition: all 130ms ease-in;
}

.photo:hover {
  transform: rotate(2deg) scale(1.025);
  
}

img{
  width: 10px;
}
</style>