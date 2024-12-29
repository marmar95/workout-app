import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }, { path: '/atlas', name: 'atlas', component: () => import('pages/Atlas.vue') }, { path: '/tabata-timer', name: 'tabata-timer', component: () => import('pages/TabataTimerPage.vue') }, { path: '/social-media', name: 'social-media', component: () => import('src/pages/SocialMedia.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
