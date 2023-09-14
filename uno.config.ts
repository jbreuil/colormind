import { colors } from '@unocss/preset-mini'
import {
  defineConfig, presetAttributify, presetIcons, presetUno,
} from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
      // exclude files
      // exclude: []
    },
  },
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
