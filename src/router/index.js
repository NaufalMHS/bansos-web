// index.js
import { createRouter, createWebHistory } from 'vue-router';
import FormDataBansos from '../components/FormDataBansos.vue';
import PreviewDataBansos from '../components/PreviewDataBansos.vue';
import ListDataBansos from '../components/ListDataBansos.vue';
import DetailDataBansos from '../components/DetailDataBansos.vue';

const routes = [
  { path: '/', name: 'FormDataBansos', component: FormDataBansos },
  { path: '/preview', name: 'PreviewDataBansos', component: PreviewDataBansos },
  { path: '/list', name: 'ListDataBansos', component: ListDataBansos },
  { path: '/detail/:index', name: 'DetailDataBansos', component: DetailDataBansos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
