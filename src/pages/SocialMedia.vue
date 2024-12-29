<template>
  <q-page class="row items-center justify-evenly social-media">
    <div v-for="tile in tiles" :key="tile.name" class="social-media__tiles">
      <a :href="tile.href" class="social-media__tile">
        <i :class="tile.faIcon" style="width: 100%; height: 100%;"></i>
      </a>
    </div>
  </q-page>
</template>

<script setup lang="ts">

const tiles = [{ faIcon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@Lipson89', name: 'youTube'}]
defineOptions({
  name: 'SocialMedia'
});

</script>
<style lang="scss">
.social-media {
  &__tiles {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  &__tile {
    text-decoration: none;
    width: 50px;
    height: 50px;
  }
}
</style>
