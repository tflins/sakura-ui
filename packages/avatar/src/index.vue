<template>
  <div :class="innerClass" :style="innerStyle">
    <span v-if="$slots.default" class="sk-avatar--text">
      {{ avatarText }}
    </span>
    <img v-else-if="src" :src="src" :alt="alt" />
    <sk-icon v-else name="avatar" :style="innerStyle" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import SkIcon from '@/icon'

export type AvatarSize = 'small' | 'middle' | 'large'
export type AvatarShape = 'circle' | 'square'

const AVATAR_CLASS_NAME = 'sk-avatar'
const MIN_SIZE = 20

export default defineComponent({
  name: 'SkAvatar',

  components: {
    SkIcon
  },

  props: {
    size: {
      type: [String, Number] as PropType<AvatarSize | number>,
      default: 'middle',
      validator: (size: AvatarSize | number) => {
        return (['small', 'middle', 'large'] as AvatarSize[]).includes(size as AvatarSize) || typeof size === 'number'
      }
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle'
    },
    iconName: String,
    src: String,
    alt: String
  },

  setup(props, { slots }) {
    const { size, shape } = props
    const defaultSlot = slots.default ? slots.default() : []
    const avatarText =
      defaultSlot.length && defaultSlot[0].children
        ? (defaultSlot[0].children as string).slice(0, 1)
        : ''

    const isNumberSize = typeof size === 'number'

    const innerStyle = computed(() => {
      if(!isNumberSize) return null
      const _size = Math.max(MIN_SIZE, size as number)
      return {
        width: `${_size}px`,
        height: `${_size}px`,
        fontSize: `${_size as number * 0.5}px`
      }
    })

    const innerClass = computed(() => {
      return {
        [AVATAR_CLASS_NAME]: true,
        [`${AVATAR_CLASS_NAME}--shape__${shape}`]: true,
        [`${AVATAR_CLASS_NAME}--size__${size}`]: !isNumberSize
      }
    })

    return {
      innerClass,
      avatarText,
      innerStyle
    }
  }
})
</script>

<style lang="scss" scoped>
$size-small: 36px;
$size-middle: 50px;
$size-large: 64px;

.sk-avatar {
  overflow: hidden;
  display: inline-block;
  background-color: $primary-color;

  .sk-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: $white;
  }

  &--text {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: $white;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &--shape__circle {
    border-radius: 50%;
  }

  &--shape__square {
    border-radius: 4px;
  }

  &--size__small {
    width: $size-small;
    height: $size-small;

    font-size: $size-small * 0.5;

    .sk-icon {
      font-size: $size-small * 0.5;
    }
  }

  &--size__middle {
    width: $size-middle;
    height: $size-middle;
    font-size: $size-middle * 0.5;

    .sk-icon {
      font-size: $size-middle * 0.5;
    }
  }

  &--size__large {
    width: $size-large;
    height: $size-large;

    font-size: $size-large * 0.5;

    .sk-icon {
      font-size: $size-large * 0.5;
    }
  }
}
</style>
