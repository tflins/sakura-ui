// .vitepress/theme/index.js
import SakuraUiSite from './sakura-ui-site'
import { IconList, MessageDemo } from './sakura-ui-site/components/docs-compoents'
import { Button, Avatar, Icon, Input } from '../../../packages/main'

import './index.scss'

export default {
  ...SakuraUiSite,
  enhanceApp({ app, router, siteData }) {
    app.use(Button)
      .use(Avatar)
      .use(Icon)
      .use(IconList)
      .use(MessageDemo)
      .use(Input)
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}
