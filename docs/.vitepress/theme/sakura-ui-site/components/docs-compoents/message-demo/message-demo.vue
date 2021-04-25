<template>
  <div class="message-demo">
    <sk-button @click="showMessage">消息</sk-button>
  </div>
</template>

<script>
import { Message } from '@/main'

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

<style lang="scss" scoped>
.message-demo {
  margin: 16px 0;
}
</style>>
