# Icon 图标

sakura-ui 提供了一套常用的图标组件。

## 基础用法

你可以使用 `name` 属性来控制显示哪个图标。

<div class="docs-preview-part">
  <sk-icon :size="20" name="collect" />
  <sk-icon :size="20" name="delete" />
  <sk-icon :size="20" name="avatar" />
  <sk-icon :size="20" name="more" />
  <sk-icon :size="20" name="await" />
  <sk-icon :size="20" name="cancel" />
  <sk-icon :size="20" name="leave-message" />
  <sk-icon :size="20" name="arrow-top" />
  <sk-icon :size="20" name="arrow-right" />
  <sk-icon :size="20" name="arrow-down" />
  <sk-icon :size="20" name="position" />
  <sk-icon :size="20" name="home" />
  <sk-icon :size="20" name="folder" />
  <sk-icon :size="20" name="weather" />
  <sk-icon :size="20" name="order" />
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

## 图标大小

由于使用的是字体图标，你可以通过 css 来设置图标的大小。sakura-ui 也提供了一个 `size` 属性，方便修改图标的大小。

<div class="docs-preview-part">
  <sk-icon :size="20" name="collect" />
  <sk-icon :size="30" name="delete" />
  <sk-icon :size="40" name="avatar" />
  <sk-icon :size="50" name="more" />
  <sk-icon :size="60" name="await" />
  <sk-icon :size="70" name="cancel" />
  <sk-icon :size="60" name="leave-message" />
  <sk-icon :size="50" name="arrow-top" />
  <sk-icon :size="40" name="arrow-right" />
  <sk-icon :size="30" name="arrow-down" />
  <sk-icon :size="20" name="position" />
</div>

::: tip
单位为: `像素px`
:::

```vue
<sk-icon :size="20" name="collect" />
<sk-icon :size="30" name="delete" />
<sk-icon :size="40" name="avatar" />
<sk-icon :size="50" name="more" />
<sk-icon :size="60" name="await" />
<sk-icon :size="70" name="cancel" />
<sk-icon :size="60" name="leave-message" />
<sk-icon :size="50" name="arrow-top" />
<sk-icon :size="40" name="arrow-right" />
<sk-icon :size="30" name="arrow-down" />
<sk-icon :size="20" name="position" />
```

## 图标颜色

可以设置属性 `color` 来替换图标的颜色。

<div class="docs-preview-part">
  <sk-icon :size="40" color="#e2608b" name="collect" />
  <sk-icon :size="40" color="#bda097" name="delete" />
  <sk-icon :size="40" color="#8db255" name="avatar" />
  <sk-icon :size="40" color="#ff8f00" name="more" />
  <sk-icon :size="40" color="#903555" name="await" />
  <sk-icon :size="40" color="#ff8f00" name="cancel" />
  <sk-icon :size="40" color="#8db255" name="leave-message" />
  <sk-icon :size="40" color="#bda097" name="arrow-top" />
  <sk-icon :size="40" color="#e2608b" name="arrow-right" />
</div>

```vue
<sk-icon :size="40" color="#e2608b" name="collect" />
<sk-icon :size="40" color="#bda097" name="delete" />
<sk-icon :size="40" color="#8db255" name="avatar" />
<sk-icon :size="40" color="#ff8f00" name="more" />
<sk-icon :size="40" color="#903555" name="await" />
<sk-icon :size="40" color="#ff8f00" name="cancel" />
<sk-icon :size="40" color="#8db255" name="leave-message" />
<sk-icon :size="40" color="#bda097" name="arrow-top" />
<sk-icon :size="40" color="#e2608b" name="arrow-right" />
```

## 图标集合

<div class="docs-preview-part">
  <icon-list />
</div>

## 属性

| 参数     | 说明       | 类型     | 默认值  |
| -------- | ---------- | ------- | ------- |
| size     | 图标大小   | Number  |     20 |
| color     | 图标颜色   | String  |     #333333  |

## 特别鸣谢

感谢「[阿里巴巴矢量图标库](https://www.iconfont.cn/)」 sakura-ui 内置的图标均是在里面挑选而来。
