// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import '@/assets/css/reset.css'
import showdown from '@/assets/js/showdown.js'
import 'prismjs/themes/prism.css'
import axios from 'axios'


export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.use(Antd);
  Vue.prototype.$show = showdown;
  Vue.prototype.$Ajax = axios;

  // 多语言热加载
  appOptions.i18n.setLocaleMessage('zh-CN', require('./locales/zh-CN.json'))
  appOptions.i18n.setLocaleMessage('en-US', require('./locales/en-US.json'))
}
