<template>
  <div class="icon-list">
    <ul class="icon-list-wrap">
      <li v-for="name in iconNameList" :key="name" class="icon-list-item">
        <sk-icon :name="name" />
        <span class="icon-name">
          {{ name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import iconfont from './iconfont.json'

export default {
  name: 'IconList',

  data() {
    return {
      iconNameList: iconfont.glyphs.map((i) => i.font_class)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list {
  .sk-icon {
    font-size: 36px;
  }

  &-wrap {
    border: 1px solid rgba(221, 221, 221, 0.747);
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
  }

  &-item {
    width: 16.66%;
    height: 110px;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;

    .icon-name {
      font-size: 16px;
      line-height: 14px;
      text-align: center;
    }

    &:hover {
      color: $primary-color;
    }
  }
}
</style>
