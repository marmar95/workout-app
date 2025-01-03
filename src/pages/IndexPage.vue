<template>
  <q-page class="row items-center">
    <q-img src="/workout-app/spa/img/logo.png"/>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list>
        <q-item tag="li" v-for="(item, index) in DESCRIPTION" :key="index">{{ item }}</q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { DESCRIPTION } from '../../consts/Description'
defineOptions({
  name: 'IndexPage'
});

</script>
