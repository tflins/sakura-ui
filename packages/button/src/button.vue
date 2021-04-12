<template>
  <button :class="['sk-button', type]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'SkButton',

  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
}
</script>

<style lang="scss" scoped>
.sk-button {
  width: 80px;
  height: 32px;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 14px;

  &.default {
    border: 1px solid #E2608B;
    background-color: #fff;
    color: #E2608B;
  }

  &.primary {
    background-color: #E2608B;
    color: white;
  }

  &.info {
    background-color: #BDA097;
    color: #fff;
  }

  &.danger {
    background-color: #903555;
    color: #fff;
  }
}
</style>
