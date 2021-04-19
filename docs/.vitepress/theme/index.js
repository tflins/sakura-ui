// .vitepress/theme/index.js
import SakuraUiSite from './sakura-ui-site'
import { Button } from '../../../packages/main'

import './index.scss'

export default {
  ...SakuraUiSite,
  enhanceApp({ app, router, siteData }) {
    app.use(Button)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}
