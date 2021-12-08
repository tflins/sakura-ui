<template>
  <button :class="innerClass" :disabled="disabled" @click="handleClick">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'SkButton'
})
</script>

<script setup lang="ts">
import type { ButtonType, ButtonEffect, ButtonSize } from './type'

/**
 * TODO: 迁移至外部统一管理，待 vue 更新
 * @see: https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#type-only-propsemit-declarations
 * @see: https://github.com/vuejs/vue-next/issues/4294
 */
export interface IProps {
  type?: ButtonType,
  hoverEffect?: ButtonEffect,
  size?: ButtonSize,
  disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'default',
  hoverEffect: 'default',
  size: 'middle',
  disabled: false
})

const { type, hoverEffect, disabled, size } = props

const innerClass = computed(() => {
  const buttonClass = 'sk-button'
  return {
    [buttonClass]: true,
    [type]: true,
    [`${buttonClass}--effect__${hoverEffect}`]: true && !disabled,
    [`${buttonClass}--disabled`]: disabled,
    [`${buttonClass}--${size}`]: true
  }
})

const emit = defineEmits(['click']);

const handleClick = (event: Event) => {
  if (disabled) return
  emit('click', event)
}
</script>

<style lang="scss" scoped>
.sk-button {
  position: relative;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: auto;

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

  &--disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &--middle {
    padding: 0 25px;
    height: 32px;
  }

  &--large {
    padding: 0 30px;
    height: 36px;
  }

  &--small {
    padding: 0 10px;
    height: 28px;
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

    &:hover::before {
      opacity: 0.05;
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

    &:active {
      opacity: 0.86;
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
