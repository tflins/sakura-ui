<template>
  <button :class="innerClass" @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, PropType, defineComponent } from 'vue'
import { ButtonType, ButtonEffect, ButtonSize } from './type'
import { isValidButtonType, isValidButtonSize, isValidButtonEffect } from './validators'

export default defineComponent({
  name: 'SkButton',

  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: () => 'default',
      validator: isValidButtonType
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'middle',
      validator: isValidButtonSize
    },
    effect: {
      type: String as PropType<ButtonEffect>,
      default: 'default',
      validator: isValidButtonEffect
    }
  },

  setup(props, ctx) {
    const innerClass = computed(() => {
      const buttonClass = 'sk-button'
      return `${buttonClass} ${props.size} ${props.type} ${buttonClass}--effect__${props.effect}`
    })
    const handleClick = (event: Event) => {
      ctx.emit('click', event)
    }

    return {
      innerClass,
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.sk-button {
  position: relative;
  width: 80px;
  height: 32px;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: $font-size-middle;

  &:active::before {
    opacity: 0.6;
  }

  &.default {
    border: 1px solid $primary-color;
    background-color: $white;
    color: $primary-color;
  }

  &.primary {
    background-color: $primary-color;
    color: $white;
  }

  &.info {
    background-color: $info-color;
    color: $white;
  }

  &.warning {
    background-color: $warning-color;
    color: $white;
  }

  &.success {
    background-color: $success-color;
    color: $white;
  }

  &.danger {
    background-color: $danger-color;
    color: $white;
  }

  &.sk-button--effect__default {
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background-color: $black;
      border: inherit;
      border-color: $black;
      border-radius: inherit;
      transform: translate(-50%, -50%);
      opacity: 0;
      content: ' ';
    }
    &:active::before {
      opacity: 0.1;
    }
  }

  &.sk-button--effect__pulse {
    &::before {
      content: ' ';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: inherit;
      border: 4px solid $primary-color;
      transform: scale(1);
      transform-origin: center;
    }
    &:hover::before {
      transition: all 0.25s ease-out;
      border: 1px solid#e6f7ff;
      transform: scale(1.25);
      opacity: 0;
    }
  }

  &.sk-button--effect__flash {
    z-index: 1;
    overflow: hidden;

    &::before {
      z-index: -1;
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      background-color: #9254de;
      transform-origin: center;
      transform: translate3d(-50%, -50%, 0) scale(0, 0);
      transition: transform 0.45s ease-in-out;
    }
    &:hover::before {
      transform: translate3d(-50%, -50%, 0) scale(15, 15);
    }
  }
}
</style>
