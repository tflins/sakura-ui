<template>
  <div
    class="sk-input sk-input-wrapper"
    :class="innerClass"
    :style="innerStyle"
  >
    <input
      v-model="modelValue"
      class="sk-input-inner"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({ name: 'SkInput' })
</script>

<script setup lang="ts">
export type EventTarget = HTMLInputElement | HTMLTextAreaElement

export interface IProps {
  type?: 'text' | 'textarea' | 'password' | 'number'
  readonly?: boolean
  minlength?: number
  placeholder?: string
  size?: 'small' | 'middle' | 'large'
  modelValue: string | number
  disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  readonly: false,
  size: 'middle'
})

const innerClass = computed(() => {
  const prefix = 'sk-input'
  return {
    [`${prefix}__${props.size}`]: true,
    'is-disabled': props.disabled,
    'is-readonly': props.readonly
  }
})
const innerStyle = computed(() => ({}))

const emit = defineEmits(['change'])

function handleChange(event: Event) {
  emit('change', (event.target as EventTarget).value)
}
</script>

<style lang="scss" scoped>
.sk-input-wrapper {
}

.sk-input {
  display: inline-flex;
  position: relative;

  &.is-disabled &-inner {
    cursor: not-allowed;
  }

  &.is-readonly &-inner {
    cursor: default;
  }

  &__middle > &-inner {
    height: 32px;
  }

  &-inner {
    padding: 0 12px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #e1e7e9;
  }

  &:not(.is-disabled) &-inner {

    &:hover {
      border-color: $primary-color-secondary;
      opacity: 0.8;
    }

    &:focus {
      outline: none;
      border-color: $primary-color;
      opacity: 1;
      box-shadow: 0 0 0 1px #f189ac80;
    }
  }
}
</style>
