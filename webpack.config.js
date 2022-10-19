import { resolve } from 'path'

export const entry = './src'
export const output = {
  filename: 'main.js',
  // eslint-disable-next-line no-undef
  path: resolve(__dirname, 'dist'),
}
export const module = {
  rules: [
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/img',
    },
  ],
}
