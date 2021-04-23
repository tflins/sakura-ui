# Avatar 头像

使用图片、文字来展示某种事物的特征，如用户头像等。

## 基本用法

使用 `size` 属性可以控制头像的大小。

<div class="docs-preview-part">
  <sk-avatar size="small" />
  <sk-avatar size="middle"/>
  <sk-avatar size="large"/>
  <sk-avatar :size="50"/>
  <sk-avatar :size="36"/>
</div>

:::tip
`size` 可以是 small、middle、large，也可以是数字类型。
:::

```vue
<sk-avatar size="small" />
<sk-avatar size="middle"/>
<sk-avatar size="large"/>
<sk-avatar :size="50"/>
<sk-avatar :size="36"/>
```

## 文字头像

将文字当做 slot 传入组件中，会显示第一个字符作为文字头像。

<div class="docs-preview-part">
  <sk-avatar>SakuraUI</sk-avatar>
  <sk-avatar>小樱</sk-avatar>
  <sk-avatar>周杰伦</sk-avatar>
  <sk-avatar>林俊杰</sk-avatar>
</div>

```vue
<sk-avatar>SakuraUI</sk-avatar>
<sk-avatar>小樱</sk-avatar>
<sk-avatar>周杰伦</sk-avatar>
<sk-avatar>林俊杰</sk-avatar>
```

## 图片头像

使用 `src` 属性来设置头像显示的图片。

<div class="docs-preview-part">
  <sk-avatar size="small" src="https://tflins.oss-cn-beijing.aliyuncs.com/sakura-ui/sakura 2.jpeg?versionId=CAEQGBiBgICUtPbyxxciIDkyNWZmNTQ0OTc0NzRiMzg4NDRlYTExN2Q4N2VlNDc5" />
  <sk-avatar size="middle" src="https://tflins.oss-cn-beijing.aliyuncs.com/sakura-ui/sakura 2.jpeg?versionId=CAEQGBiBgICUtPbyxxciIDkyNWZmNTQ0OTc0NzRiMzg4NDRlYTExN2Q4N2VlNDc5" />
  <sk-avatar size="large" src="https://tflins.oss-cn-beijing.aliyuncs.com/sakura-ui/sakura 2.jpeg?versionId=CAEQGBiBgICUtPbyxxciIDkyNWZmNTQ0OTc0NzRiMzg4NDRlYTExN2Q4N2VlNDc5" />
  <sk-avatar :size="80" src="https://tflins.oss-cn-beijing.aliyuncs.com/sakura-ui/sakura 2.jpeg?versionId=CAEQGBiBgICUtPbyxxciIDkyNWZmNTQ0OTc0NzRiMzg4NDRlYTExN2Q4N2VlNDc5" />
</div>

```vue
<template>
  <div class="docs-preview-part">
      <sk-avatar v-for="size in sizes" :src="url" :size="size" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sizes: ['small', 'middle', 'large', 80],
        url: 'https://tflins.oss-cn-beijing.aliyuncs.com/sakura-ui/sakura 2.jpeg?versionId=CAEQGBiBgICUtPbyxxciIDkyNWZmNTQ0OTc0NzRiMzg4NDRlYTExN2Q4N2VlNDc5'
      }
    }
  }
</script>
```

还木有...
