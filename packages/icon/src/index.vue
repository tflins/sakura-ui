<template>
  <i :class="['sk-icon', `sk-icon-${name}`]" :style="innerStyle"></i>
</template>

<script lang="ts">
export default {
  name: 'SkIcon'
}
</script>

<script setup lang="ts">
import { defineComponent, computed, defineProps } from 'vue'
import './icon-font/iconfont.css'

const props = defineProps<{
  name: string,
  size?: number
}>()
const { size } = props

const innerStyle = computed(() => {
  if(!size) return
  return {
    fontSize: `${size}px`
  }
})
</script>
