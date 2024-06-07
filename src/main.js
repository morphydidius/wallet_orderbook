import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from '@/plugins/vuetify';
import '@/scss/index.scss';

createApp(App)
	.use(router)
	.use(store)
	.use(vuetify)
	.mount('#app');

export default App;
