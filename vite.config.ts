import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 專案網址通常是 https://帳號.github.io/Repository名稱/
// GitHub Actions 會提供 GITHUB_REPOSITORY，因此自動設定正確的 base 路徑。
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
});
