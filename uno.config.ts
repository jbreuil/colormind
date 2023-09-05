import {
  defineConfig, presetAttributify, presetIcons, presetUno,
} from 'unocss'
import { colors } from '@unocss/preset-mini'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  safelist: safelistGenerator(),
})

function safelistGenerator(): string[] {
  const safelist: string[] = []
  const colorlist: string[] = [
    'red',
  ]
  const prefixlist = [
    'b',
    'bg',
    'text',
    'hover:text',
  ]

  for (const color in colors)
    colorlist.push(color)

  for (const prefix of prefixlist) {
    for (const color of colorlist)
      safelist.push(`${prefix}-${color}`)
  }

  safelist.push(...Array.from({ length: 20 }, (_, i) => `w-${i + 1}`))
  safelist.push(...Array.from({ length: 20 }, (_, i) => `h-${i + 1}`))
  safelist.push(...Array.from({ length: 20 }, (_, i) => `text-${i + 1}`))

  return safelist
}
