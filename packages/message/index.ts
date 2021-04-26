import SkMessage from './src/index.vue'
import { IMessageBaseOptions } from './src/type'
import { App, createApp, ComponentPublicInstance, h, Teleport, reactive } from 'vue'
export interface IHandleMessageFn {
  (message: string, options?: IMessageBaseOptions): void
}

let num = 0

export interface IMessage {
  messageQueue: any[]

  success: IHandleMessageFn
}

export interface IMessageOptions {}

export class Message implements IMessage {
  // TODO: messageQueue type
  private _messageQueue: any[] = []
  private wrapper: ComponentPublicInstance<any>

  // TODO: proxy -> this.wrapper.append | this.wrapper.remove
  get messageQueue() {
    return this._messageQueue
  }

  set messageQueue(queue) {
    this._messageQueue = queue
  }

  private createWrapper(): App {
    if(this.wrapper) return this.wrapper

    this.wrapper = createApp({
      setup:() => {
        const messageQueue = reactive([])
        const append = (message: never) => {
          messageQueue.push(message)
        }
        const remove = () => {
          messageQueue.shift()
        }
        return {
          messageQueue,
          append,
          remove
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

  private remove() {}

  private removeAll() {}

  success(content: string, options?: Partial<IMessageOptions>) {
    num += 1
    this.createWrapper()
    this.wrapper.append({
      content: content + num,
      id: num
    })

    setTimeout(() => {
      this.wrapper.remove()
    }, 2000)
  }
}

export default new Message()
