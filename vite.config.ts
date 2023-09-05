import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    UnoCSS(),
    AutoImport({
      dts: true,
      dirs: [
        './composables', // only root modules
      ],
      vueTemplate: true,
      imports: [
        // presets
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        // example type import
        // {
        //   from: 'vue-router',
        //   imports: ['RouteLocationRaw'],
        //   type: true,
        // },
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        PrimeVueResolver(),
      ],
    }),
    vue(),
  ],
})
