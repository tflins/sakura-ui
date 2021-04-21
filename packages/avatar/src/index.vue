<template>
  <div class="sk-avatar">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export type AvatarSize = 'small' | 'middle' | 'large'
export type AvatarShape = 'circle' | 'square'

const AVATAR_CLASS_NAME = 'sk-avatar'

export default defineComponent({
  name: 'SkAvatar',

  props: {
    size: {
      type: [String, Number] as PropType<AvatarSize | number>,
      default: 'middle'
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle'
    },
    src: String,
    alt: String
  },

  setup(props, { emit }) {
    const { size, shape, src, alt } = props

    const innerClass = computed(() => {
      return {
        [AVATAR_CLASS_NAME]: true
      }
    })

    return {
      innerClass
    }
  }
})
</script>

<style lang="scss" scoped>
.sk-avatar {
}
</style>
