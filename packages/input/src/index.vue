<template>
  <input type="text" @change="handleChange" />
</template>

<script labg="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({ name: 'SkInput' })
</script>

<script setup lang="ts">
export type EventTarget = HTMLInputElement | HTMLTextAreaElement

export interface IProps {
  type?: 'text' | 'textarea' | 'password' | 'number'
  readonly?: boolean
  minlength?: number
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'text',
  readonly: false
})

const innerStyle = computed(() => {})

const emit = defineEmits(['change'])

function handleChange(event: Event) {
  emit('change', (event.target as EventTarget).value)
}
</script>
