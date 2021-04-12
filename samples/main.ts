import App from './app.vue'
import { Button } from '../packages/main'
import { createApp } from 'vue'

createApp(App)
  .use(Button)
  .mount('#app')
