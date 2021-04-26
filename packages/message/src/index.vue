<template>
  <transition-group>
    <div v-for="message in messageQueue" :key="message.id" class="sk-message">
      <p class="sk-message-content" v-html="message.content"></p>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SkMessage',

  props: {
    messageQueue: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.sk-message {
  padding: 12px 20px;
  margin-top: 16px;
  display: inline-flex;
  max-width: 300px;
  background-color: $primary-color;
  border-radius: 8px;
  // transition: all 0.3s;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
  position: relative;

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
