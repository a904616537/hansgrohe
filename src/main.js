// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue       from 'vue'
import App       from './App'
import Store     from './store'
import router    from './router/index'
import VueRouter from 'vue-router'
// import Cookie from 'vue-cookie'
import Vuex      from 'vuex'
import vuexI18n  from 'vuex-i18n'
import Cookie    from 'vue-cookie'
import Logo      from '@/components/logo'
import Language  from '@/components/language'
import Calendar  from 'vue2-datepick'


// Vue.use(Cookie)
Vue.use(VueRouter)
Vue.use(Calendar)

Vue.component('v-logo',Logo)
Vue.component('v-lang',Language)


//  i18n语言
// if(!Cookie.get('lang')) {
// 	Cookie.set('lang', 'zh')
// }

// var locale = Cookie.get('lang');

Vue.use(vuexI18n.plugin, Store)
Vue.i18n.add('zh', require('@/languages/zh.json'))
Vue.i18n.add('en', require('@/languages/en.json'))
Vue.i18n.set('en');

// Vue.config.network = 'http://localhost:8130';
Vue.config.network = 'http://47.100.162.54:8081';

new Vue({
	router,
	el         : '#app',
	store      : Store,
	template   : '<App/>',
	components : { App }
})
