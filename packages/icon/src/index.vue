<template>
  <i :class="['sk-icon', `sk-icon-${name}`]" :style="innerStyle"></i>
</template>

<script lang="ts">
export default {
  name: 'SkIcon'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import './icon-font/iconfont.css'

const defaultColor = '#333'

const props = defineProps<{
  name: string,
  size?: number,
  color?: string
}>()
const { size, color } = props

const innerStyle = computed(() => {
  if(!size) return
  return {
    fontSize: `${size}px`,
    color: color || defaultColor
  }
})
</script>
