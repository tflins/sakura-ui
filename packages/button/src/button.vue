<template>
  <button class="sk-button">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'SkButton',

  props: {

  }
}
</script>
