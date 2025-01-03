<template>
  <q-page class="items-center justify-center flex">
    <div class="items-center justify-center flex flex-wrap gap-[16px] flex-col laptop:flex-row">
      <div v-for="tile in tiles" :key="tile.name" class="hover:opacity-50 p-[16px]">
        <a :href="tile.href || '#'" target="_blank" class="w-full">
            <i :class="tile.faIcon" class="fa-7x"></i>
          <p class="text-center">{{ tile.title }}</p>
        </a>
    </div>
    </div>

  </q-page>
</template>

<script setup lang="ts">

const tiles = [{ faIcon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/@Lipson89', name: 'youTube', title: 'LipsonTv'}, { faIcon: 'fa-brands fa-square-facebook', name: 'facebook', title: 'Facebook'}, { faIcon: 'fa-brands fa-square-instagram', name: 'instagram', title: 'Instagram' }, { faIcon: 'fa-regular fa-envelope', href: '#', name: 'mail', title: 'E-mail'}]
defineOptions({
  name: 'SocialMedia'
});

</script>
