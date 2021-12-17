# Input 输入框

通常用于与操作系统的键盘进行输入交互。

## 基础用法

最基本的用法 input 组件

<div class="docs-preview-part">
  <input-base />
</div>

::: tip
使用 `v-model` 进行双向绑定，或设置属性 `modelValue` 指定 value
:::

```vue
<template>
  <sk-input v-model="value" />
  <sk-input model-value="hello world" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('基本使用')
</script>
```

## 禁用状态

使用属性 `disabled` 来禁用这个 input

<div class="docs-preview-part">
  <sk-input placeholder="禁用状态" disabled />
</div>

```vue
<sk-input placeholder="禁用状态" disabled />
```

## 只读状态

使用属性 `readonly` 来设置只读状态

<div class="docs-preview-part">
  <sk-input model-value="数据不可变" readonly />
</div>

```vue
<sk-input model-value="数据不可变" readonly />
```
