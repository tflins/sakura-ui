import SkMessage from './src/index.vue'
import { IMessageBaseOptions } from './src/type'
import { h, App, Teleport, createApp } from 'vue'

export interface IHandleMessageFn {
  (message: string, options?: IMessageBaseOptions): void
}

export interface IMessage {
  messageQueue: any[]

  success: IHandleMessageFn
}

export class Message implements IMessage {
  private _messageQueue: any[] = []
  private verticalOffset: number = 20

  constructor() {}

  get messageQueue() {
    return this._messageQueue
  }

  private createMessageApp(
    options: Partial<IMessageBaseOptions>
  ): { id: string; app: App } {
    const _id = new Date().getTime() + ''
    // TODO: offset 待处理
    this.verticalOffset += 60

    const _options = Object.assign({}, options, {
      unmount: this.close.bind(this),
      id: _id,
      offset: options.offset || this.verticalOffset
    })

    const app = createApp({
      render() {
        return h(Teleport, { to: 'body' }, [
          h('div', { class: `sk-message-wrap-${_id}` }, [
            h(SkMessage, _options)
          ])
        ])
      }
    })

    return { id: _id, app }
  }

  private close(id: string) {
    const idx = this._messageQueue.findIndex((item) => item.id === id)
    this.messageQueue[idx].app.unmount()
    this.messageQueue.splice(idx, 1)
  }

  private mountApp(
    app: App,
    container: HTMLElement = document.createElement('div')
  ) {
    app.mount(container)
  }

  success(message: string, options?: IMessageBaseOptions) {
    const { app, id } = this.createMessageApp(
      Object.assign({}, options, { message })
    )
    this._messageQueue.push({ app, id })
    this.mountApp(app)

    console.log(this.messageQueue)
  }

  error() {}

  info() {}

  warning() {}
}

export default new Message()
