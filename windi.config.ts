import { defineConfig } from 'vite-plugin-windicss'
import { transform } from 'windicss/helpers'

export default defineConfig({
  plugins: [
    transform('daisyui'),
  ],
})
