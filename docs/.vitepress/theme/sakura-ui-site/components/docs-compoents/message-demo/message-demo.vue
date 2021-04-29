<template>
  <div v-if="demoId === '1'" class="message-demo">
    <sk-button type="success" @click="showMessage1">成功提示</sk-button>
    <sk-button type="danger" @click="showMessage2">错误提示</sk-button>
    <sk-button type="info" @click="showMessage3">无类型提示</sk-button>
    <sk-button type="warning" @click="showMessage4">错误提示</sk-button>
  </div>

  <div v-if="demoId === '2'" class="message-demo">
    <sk-button @click="showMessage5">显示 5 秒</sk-button>
    <sk-button @click="showMessage6">显示 2 秒</sk-button>
    <sk-button @click="showMessage7">不会自动关闭</sk-button>
  </div>
</template>

<script>
import { Message } from '@/main'

export default {
  name: 'MessageDemo',

  props: {
    demoId: {
      type: String,
      default: '1'
    }
  },

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
    const showMessage5 = () => {
      Message.success('显示 5 秒', {
        duration: 5000
      })
    }
    const showMessage6 = () => {
      Message.success('显示 2 秒', {
        duration: 2000
      })
    }
    const showMessage7 = () => {
      Message.success('这个一条不会自动关闭的消息', {
        duration: 0
      })
    }

    return {
      showMessage1,
      showMessage2,
      showMessage3,
      showMessage4,
      showMessage5,
      showMessage6,
      showMessage7
    }
  }
}
</script>

<style lang="scss" scoped>
.message-demo {
  margin: 16px 0;

  :not(:last-child) {
    margin-right: 12px;
  }
}
</style>
