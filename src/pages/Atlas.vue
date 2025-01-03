<template>
  <q-page class="atlas row items-center justify-evenly">
    <div class="atlas__tiles">
      <div class="atlas__tile" v-for="(tile, key) in ATLAS" :key="key">
        <iframe class="h-[200px]" :src="tile.youTubeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="m-auto">
          <p class="atlas__tile-title">{{ tile.title }}</p>
          <p class="atlas__tile-subtitle">{{ tile.subTitle }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ATLAS } from 'app/consts/Atlas';
defineOptions({
  name: 'AtlasPage'
});
</script>
<style lang="scss">
.atlas {
  &__tiles {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 16px;
  }
  &__tile {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
    border: 2px solid white;
    padding: 10px;
    &-item {
      width: 100%;
      @media(min-width: $breakpoint-md) {
        width: 50%
      }
    }

    &:hover {
      opacity: 0.5;
    }
    @media(min-width: $breakpoint-md) {
      width: calc(50% - 16px);
      
    }
    &-title {
      font-size: 20px;
      text-align: center;
    }
    &-subtitle {
      text-align: center;
    }
  }
}
</style>
