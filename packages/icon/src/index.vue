<template>
  <i :class="['sk-icon', `sk-icon-${name}`]" :style="innerStyle"></i>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import './icon-font/iconfont.css'

export default defineComponent({
  name: 'SkIcon',

  props: {
    name: String,
    size: Number
  },

  setup(props) {
    const { size } = props
    const innerStyle = computed(() => {
      if(!size) return
      return {
        fontSize: `${size}px`
      }
    })

    return {
      innerStyle
    }
  }
})
</script>
