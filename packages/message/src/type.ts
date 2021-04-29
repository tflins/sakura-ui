export interface IHandleMessage {
  (message: string, options?: IMessageBaseOptions): void
}

export interface IMessage {
  success: IHandleMessage
  warning: IHandleMessage
  info: IHandleMessage
  error: IHandleMessage
}

export interface IMessageOptions {
  type?: MessageType
  message: string
  time: number
  showClose: boolean
  textAlign: 'left' | 'center' | 'right'
}

export interface IMessageBaseOptions {
  time: number
  showClose: boolean
  offset: number
  textAlign: 'left' | 'center' | 'right'
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}
