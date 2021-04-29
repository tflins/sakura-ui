# Message 消息

消息组件提供不同类型的消息通知，以此来提示用户。

## 基本用法

从 `sakura-ui` 中引入 `Message` 组件，调用相应的方法使用。

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
    const showMessage1 = () => {
      Message.success('这是一条成功类型的提示')
    }
    const showMessage2 = () => {
      Message.error('这是一条错误类型的提示')
    }
    const showMessage3 = () => {
      Message.info('这是一条提示类型的提示')
    }
    const showMessage4 = () => {
      Message.warning('这是一条警告类型的提示')
    }

    return {
      showMessage1,
      showMessage2,
      showMessage3,
      showMessage4
    }
  }
}
</script>
```

## 显示时间

通过设置 `duration` 属性，可以控制消息组件的显示时间。

<div class="docs-preview-part">
  <message-demo demo-id="2"></message-demo>
</div>

