<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-list>
          <q-tabs vertical>
            <q-route-tab v-for="(item, index) in items" v-bind="item" :key="index"></q-route-tab>
          </q-tabs>
        </q-list>
      </div>
  </div>
</template>
<script lang="ts" setup>
import IMenuItem from 'src/types/IMenuItem';

const items : IMenuItem[] = [ { to: { path: '/' }, icon: 'info', label: 'O nas', name: 'main'}, { to: { path: '/atlas' }, icon: 'fitness_center', label: 'Atlas', name: 'atlas'}, { to: { path: '/tabata-timer' }, icon: 'timer', label: 'Tabata timer', name: 'tabata-timer'}, { to: { path: '/social-media' }, icon: 'mail', label: 'Social media', name: 'social-media'} ]
</script>