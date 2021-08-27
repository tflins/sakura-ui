import type { App } from 'vue'
import Input from './src/index.vue'

Input.install = (app: App) => {
  app.component(Input.name || 'SkInput', Input)
}

export default Input