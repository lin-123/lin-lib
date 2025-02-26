import { defineConfig } from 'dumi';

const publicPath = process.env.NODE_ENV === 'production' ? '/lin-lib/' : '/';
export default defineConfig({
  outputPath: 'lin-lib',
  history: { type: 'hash' },
  base: publicPath,
  publicPath,
  themeConfig: {
    name: 'lin-lib',
  },
});
