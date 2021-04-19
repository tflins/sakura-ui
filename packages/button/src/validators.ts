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
