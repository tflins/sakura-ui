import {
  h,
  App,
  Teleport,
  createApp,
  ComponentPublicInstance
} from 'vue'
import { uuid } from '@/utils'
import SkMessage from './src/index.vue'

export interface IHandleMessageFn {
  (message: string, options?: Partial<IMessageOptions>): void
}

export interface IMessage {
  messageQueue: any[]

  success: IHandleMessageFn
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export type MessageIconType = 'check' | 'cancel' | 'warning'

const defaultMessageOptions = {
  type: MessageType.INFO,
  duration: 3000,
  closeVisible: false
}

export interface IMessageOptions {
  id: string
  type: MessageType
  content: string
  duration: number
  closeVisible: boolean
}

export class Message implements IMessage {
  private wrapper: ComponentPublicInstance<any>

  get messageQueue() {
    return this.wrapper.messageQueue
  }

  set messageQueue(queue) {
    this.wrapper.messageQueue = queue
  }

  private createWrapper(): App {
    if (this.wrapper) return this.wrapper

    this.wrapper = createApp({
      data() {
        return {
          messageQueue: []
        }
      },

      methods: {
        remove(message: any) {
          this.messageQueue = this.messageQueue.filter((item: any) => item.id !== message.id)
        },
        append(message: any) {
          this.messageQueue.push(message)
        }
      },

      render() {
        return h(Teleport, { to: 'body' }, [
          h('div', { class: 'sk-message-wrapper' }, [
            h(SkMessage, { messageQueue: this.messageQueue })
          ])
        ])
      }
    }).mount(document.createElement('div'))
    return this.wrapper
  }

  private appendMessage(message: Partial<IMessageOptions>) {
    this.wrapper.append(message)

    if(message.duration === 0) return

    setTimeout(() => {
      this.remove(message)
    }, message.duration)
  }

  private remove(message: Partial<IMessageOptions>) {
    this.wrapper.remove(message)
  }

  private createMessage(content: string, options?: Partial<IMessageOptions>): IMessageOptions {
    const message = Object.assign({}, defaultMessageOptions, {
      content,
      id: uuid()
    }, options)

    return message
  }

  success(content: string, options?: Partial<IMessageOptions>) {
    const message = this.createMessage(content, { type: MessageType.SUCCESS, ...options })
    this.createWrapper()
    this.appendMessage(message)
  }

  error(content: string, options?: Partial<IMessageOptions>) {
    const message = this.createMessage(content, { type: MessageType.ERROR, ...options })
    this.createWrapper()
    this.appendMessage(message)
  }

  info(content: string, options?: Partial<IMessageOptions>) {
    const message = this.createMessage(content, { type: MessageType.INFO, ...options })
    this.createWrapper()
    this.appendMessage(message)
  }

  warning(content: string, options?: Partial<IMessageOptions>) {
    const message = this.createMessage(content, { type: MessageType.WARNING, ...options })
    this.createWrapper()
    this.appendMessage(message)
  }
}

export default new Message()

