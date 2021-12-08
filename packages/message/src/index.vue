<template>
  <transition-group>
    <div
      v-for="message in messageQueue"
      :key="message.id"
      :class="getInnerClass(message.type)"
    >
      <sk-icon :name="getIconName(message.type)" />
      <p class="sk-message-content" v-html="message.content"></p>
    </div>
  </transition-group>
</template>

<script lang="ts">
export default { name: 'SkMessage' }
</script>

<script setup lang="ts">
import SkIcon from '@/icon'
import type { MessageIconType, MessageType, IMessageOptions } from '../index'

const MessageIconMap: Record<MessageType, MessageIconType> = {
  success: 'check',
  error: 'cancel',
  warning: 'warning',
  info: 'warning'
}

const props = defineProps<{
  messageQueue: IMessageOptions[]
}>()

const getInnerClass = (type: MessageType) => {
  const MESSAGE_CLASS = 'sk-message'
  return {
    [MESSAGE_CLASS]: true,
    [`${MESSAGE_CLASS}-${type}`]: true
  }
}

const getIconName = (type: MessageType): MessageIconType => {
  return MessageIconMap[type] || 'warning'
}
</script>

<style lang="scss">
.sk-message {
  padding: 12px 20px;
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  max-width: 300px;
  background-color: $primary-color;
  border-radius: 8px;
  transition: all 0.3s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  box-shadow: 2px 1px 5px 2px rgba($black, 0.1);
  position: relative;

  .sk-icon {
    margin-right: 8px;
    color: $white;
  }

  &-wrapper {
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    align-items: center;
  }

  &-content {
    margin: 0;
    color: $white;
  }

  &-success {
    background-color: $success-color;
  }

  &-error {
    background-color: $danger-color;
  }

  &-info {
    background-color: $info-color;
  }

  &-warning {
    background-color: $warning-color;
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }

  &.v-leave-active {
    position: absolute;
  }
}
</style>
