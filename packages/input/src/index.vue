<template>
  <div
    class="sk-input sk-input-wrapper"
    :class="innerClass"
    :style="innerStyle"
  >
    <input
      class="sk-input-content"
      type="text"
      :placeholder="placeholder"
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
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  readonly: false,
  size: 'middle'
})

const innerClass = computed(() => {
  const prefix = 'sk-input'
  return {
    [`${prefix}__${props.size}`]: true
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
  position: relative;

  &__middle > &-content {
    height: 32px;
  }

  &-content {
    padding: 0 12px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #e1e7e9;

    &:focus {
      outline: none;
      border-color: $primary-color;
    }
  }
}
</style>
