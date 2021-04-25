<template>
  <transition name="sk-message-fade">
    <div v-show="visible" class="sk-message" :style="innerStyle">
      <p class="sk-message-content" v-html="message"></p>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  TransitionGroup,
  PropType,
  onMounted,
  onUnmounted
} from 'vue'
import { MessageType } from './type'

export default defineComponent({
  name: 'SkMessage',

  props: {
    id: String,
    message: String as PropType<MessageType>,
    time: {
      type: Number,
      default: 2000
    },
    showClose: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    offset: {
      type: Number,
      default: 40
    },
    unmount: Function
  },

  setup(props, { emit }) {
    const { time, offset } = props
    const visible = ref(false)

    const hide = () => {
      visible.value = false
    }

    const show = () => {
      if (time === 0) return
      visible.value = true

      const timer = setTimeout(() => {
        hide()
        props.unmount && props.unmount(props.id)
      }, time)
    }

    const innerStyle = computed(() => {
      return {
        top: `${offset}px`
      }
    })

    onMounted(() => {
      show()
    })

    return {
      visible,
      innerStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.sk-message {
  position: fixed;
  padding: 12px 20px;
  left: 50%;
  // top: 50%;
  z-index: 999;
  background-color: $primary-color;
  border-radius: 8px;

  &-content {
    margin: 0;
    color: $white;
  }
}

.sk-message-fade-enter-active {
  transition: opacity 0.3s;
}

.sk-message-fade-leave-active {
  transition: opacity 0.3s;
}

.sk-message-fade-enter-from,
.sk-message-fade-leave-to {
  opacity: 0;
}</style
>>
