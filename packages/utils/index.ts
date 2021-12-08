export * from './uuid'

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type Full<T> = {
  [P in keyof T]-?: T[P];
}
