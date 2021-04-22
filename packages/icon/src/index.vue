<template>
  <i :class="['sk-icon', `sk-icon-${name}`]"></i>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import './icon-font/iconfont.css'

export default defineComponent({
  name: 'SkIcon',

  props: {
    name: String
  }
})
</script>
