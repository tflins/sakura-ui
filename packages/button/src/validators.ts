/**
 * 使用 typescript 类型来声明 props (defineProps<Type>)，应该不需要验证器了，暂时保留着
 */
import { ButtonType, ButtonSize, ButtonEffect } from './type'

export const isValidButtonType = (type: ButtonType) => {
  return [
    'default',
    'primary',
    'info',
    'warning',
    'success',
    'danger'
  ].includes(type)
}

export const isValidButtonSize = (size: ButtonSize) => {
  return ['middle', 'large', 'small'].includes(size)
}

export const isValidButtonEffect = (effect: ButtonEffect) => {
  return ['pulse', 'default', 'flash'].includes(effect)
}
