# Button 按钮

常用的操作按钮。

## 基础用法

通过 type 属性，控制按钮的类型

<div class="docs-preview-part">
  <sk-button>默认</sk-button>
  <sk-button type="primary">主要</sk-button>
  <sk-button type="info">提示</sk-button>
  <sk-button type="success">成功</sk-button>
  <sk-button type="warning">警告</sk-button>
  <sk-button type="danger">危险</sk-button>
</div>

```vue
<sk-button>默认</sk-button>
<sk-button type="primary">主要</sk-button>
<sk-button type="info">提示</sk-button>
<sk-button type="success">成功</sk-button>
<sk-button type="warning">警告</sk-button>
<sk-button type="danger">危险</sk-button>
```

## 禁用状态

你可以添加 `disabled` 来禁用按钮

<div class="docs-preview-part">
  <sk-button disabled>默认</sk-button>
  <sk-button type="primary" disabled>主要</sk-button>
  <sk-button type="info" disabled>提示</sk-button>
  <sk-button type="success" disabled>成功</sk-button>
  <sk-button type="warning" disabled>警告</sk-button>
  <sk-button type="danger" disabled>危险</sk-button>
</div>

```vue
<sk-button disabled>默认</sk-button>
<sk-button type="primary" disabled>主要</sk-button>
<sk-button type="info" disabled>提示</sk-button>
<sk-button type="success" disabled>成功</sk-button>
<sk-button type="warning" disabled>警告</sk-button>
<sk-button type="danger" disabled>危险</sk-button>
```

## hover 特效

通过 effect 属性，来设置按钮 `hover` 状态的特效

<div class="docs-preview-part margin-bottom-12">
  <sk-button hover-effect="pulse">脉冲</sk-button>
  <sk-button type="primary" hover-effect="pulse">脉冲</sk-button>
  <sk-button type="info" hover-effect="pulse">脉冲</sk-button>
  <sk-button type="success" hover-effect="pulse">脉冲</sk-button>
  <sk-button type="warning" hover-effect="pulse">脉冲</sk-button>
  <sk-button type="danger" hover-effect="pulse">脉冲</sk-button>
</div>

<div class="docs-preview-part">
  <sk-button hover-effect="flash">闪烁</sk-button>
  <sk-button type="primary" hover-effect="flash">闪烁</sk-button>
  <sk-button type="info" hover-effect="flash">闪烁</sk-button>
  <sk-button type="success" hover-effect="flash">闪烁</sk-button>
  <sk-button type="warning" hover-effect="flash">闪烁</sk-button>
  <sk-button type="danger" hover-effect="flash">闪烁</sk-button>
</div>

::: tip
`effect` 的属性有 `pulse`: 脉冲、`flash`: 闪烁
:::

```vue
<sk-button effect="pulse">脉冲</sk-button>
<sk-button type="primary" effect="pulse">脉冲</sk-button>
<sk-button type="info" effect="pulse">脉冲</sk-button>
<sk-button type="success" effect="pulse">脉冲</sk-button>
<sk-button type="warning" effect="pulse">脉冲</sk-button>
<sk-button type="danger" effect="pulse">脉冲</sk-button>

<sk-button effect="flash">闪烁</sk-button>
<sk-button type="primary" effect="flash">闪烁</sk-button>
<sk-button type="info" effect="flash">闪烁</sk-button>
<sk-button type="success" effect="flash">闪烁</sk-button>
<sk-button type="warning" effect="flash">闪烁</sk-button>
<sk-button type="danger" effect="flash">闪烁</sk-button>
```

## 按钮尺寸

sakura-ui 提供了三种不同的尺寸

<div class="docs-preview-part">
  <sk-button size="small">小尺寸</sk-button>
  <sk-button size="middle">默认</sk-button>
  <sk-button size="large">大尺寸</sk-button>
</div>

```vue
<sk-button size="small">小尺寸</sk-button>
<sk-button size="middle">默认</sk-button>
<sk-button size="large">大尺寸</sk-button>
```

## 属性

| 参数     | 说明       | 类型    | 可选值                                                | 默认值  |
| -------- | ---------- | ------- | ----------------------------------------------------- | ------- |
| type     | 按钮类型   | String  | default / primary / info / warning / success / danger | default |
| size     | 按钮尺寸   | String  | small / middle / large                                | middle  |
| effect   | hover 特效 | String  | default / pulse / flash                               | default |
| disabled | 是否禁用   | Boolean |                                                       | false   |
