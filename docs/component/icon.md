# Icon 图标

sakura-ui 提供了一套常用的图标组件。

## 基础用法

你可以使用 `name` 属性来控制显示哪个图标。

<div class="docs-preview-part">
  <sk-icon name="collect" />
  <sk-icon name="delete" />
  <sk-icon name="avatar" />
  <sk-icon name="more" />
  <sk-icon name="await" />
  <sk-icon name="cancel" />
  <sk-icon name="leave-message" />
  <sk-icon name="arrow-top" />
  <sk-icon name="arrow-right" />
  <sk-icon name="arrow-down" />
  <sk-icon name="arrow-left" />
</div>

```vue
<sk-icon name="collect" />
<sk-icon name="delete" />
<sk-icon name="avatar" />
<sk-icon name="more" />
<sk-icon name="await" />
<sk-icon name="cancel" />
<sk-icon name="leave-message" />
<sk-icon name="arrow-top" />
<sk-icon name="arrow-right" />
<sk-icon name="arrow-down" />
<sk-icon name="arrow-left" />
```

## 图标集合

<div class="docs-preview-part">
  <icon-list />
</div>

## 图标大小

由于使用的是字体图标库，你可以通过 css 来设置图标的大小。

```css
.sk-icon {
  font-size: 36px;
}
```

## 特别鸣谢

特别鸣谢 「[阿里巴巴矢量图标库](https://www.iconfont.cn/)」 本组件内置的图标均是在里面挑选而来。
