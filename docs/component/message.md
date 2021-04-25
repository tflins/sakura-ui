# Message 消息

<div class="docs-preview-part">
  <message-demo></message-demo>
</div>

```vue
<template>
  <div class="message-demo">
    <sk-button @click="showMessage">消息</sk-button>
  </div>
</template>

<script>
import { Message } from 'sakura3'

export default {
  name: 'MessageDemo',

  setup() {
    const showMessage = () => {
      Message.success('某座天桥 某一张合照')
    }

    return {
      showMessage
    }
  }
}
</script>
```
