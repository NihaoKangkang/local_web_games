# 示例游戏模板（Example Game）

用于新增游戏的统一规范与模板。

## 文件结构
- `index.html` 页面结构
- `styles.css` 样式
- `script.js` 游戏逻辑
- `game.json` 首页卡片信息
- `assets/` 本游戏资源（封面、音效等）

## game.json 说明
```json
{
  "title": "示例游戏",
  "subtitle": "一句话描述玩法",
  "cover": "assets/cover.png"
}
```

## 页面结构规范
- 单页面，无纵向滚动。
- 使用 `100vh/100svh`。
- 顶部栏：`back + title/subtitle` 在左，操作按钮在右。
- 主区：左侧 Canvas 游戏区域，右侧信息栏。

## 文本与布局规范（手机端）
- 手机端按钮保持同一行（缩小内边距/字体）。
- 隐藏图例 `legend`，保留必要提示 `status/hint`。
- 文字大小使用 `clamp()` 自适应。

## 游戏区域规范
- Canvas 固定为正方形，使用 `.canvas-wrap` 包裹。
- 自动根据可用高度计算 `canvas` 尺寸，保证完整显示。

## 交互规范
- 规则按钮显示规则浮层。
- 游戏按钮（重置/悔棋等）放在顶部右侧。
- 支持键盘 + 移动端触控（如滑动）。

## 模板文件
- `index.html`
- `styles.css`
- `script.js`
