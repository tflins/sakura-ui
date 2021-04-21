import { App } from 'vue'
import Avatar from './src/index.vue'

Avatar.install = (app: App) => {
  app.component(Avatar.name, Avatar)
}

export default Avatar
