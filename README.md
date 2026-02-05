# Local Web Games

一个单页导航 + 多个独立小游戏页面的本地网页项目。适合快速扩展新游戏。

## 目录结构
- `index.html` 首页导航
- `styles.css` 首页样式
- `assets/gifs/` 首页卡片图片/动画
- `gomoku/` 五子棋
- `snake/` 贪吃蛇
- `sokoban/` 推箱子
- `example-game/` 示例模板（用于新增游戏）

## 本地运行
直接用浏览器打开 `index.html` 即可（无需构建）。

## 新增游戏流程（推荐）
1. 复制 `example-game/` 为新的游戏目录，例如 `tetris/`
2. 修改 `tetris/game.json` 的 `title/subtitle/cover`
3. 修改 `tetris/index.html` 内的标题/文案
4. 修改 `tetris/script.js` 实现游戏逻辑
5. 运行 `python3 scripts/generate_home.py` 自动更新首页

## 设计规范（摘要）
- 页面保持单屏显示（`100vh/100svh`），避免纵向滚动。
- 顶部栏：左侧返回 + 标题/副标题，右侧操作按钮（规则、重置等）。
- 游戏区：左侧 Canvas，右侧信息栏。
- 手机端：按钮同一行；隐藏冗余文字（如 legend）。

详细规范见 `example-game/README.md`。

## 贡献规范
- 目录命名使用小写英文（如 `tetris`）。
- 图片统一放在 `assets/gifs/` 或游戏目录 `assets/`。
- 每个游戏必须提供 `game.json`。
- 首页统一由脚本生成，不手工修改 `index.html`。

## 图片/GIF 规范
- 推荐尺寸：`320x200`。
- 风格保持一致（像素风或同主题）。
- 命名用英文小写，避免空格。

## 移动端适配 Checklist
- 顶部按钮同一行不换行。
- 右侧信息栏文本不拥挤。
- Canvas 保持正方形并完整显示。
