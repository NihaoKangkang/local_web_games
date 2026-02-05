const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('statusText');
const hintText = document.getElementById('hintText');
const legend = document.getElementById('legend');
const resetBtn = document.getElementById('resetBtn');
const rulesBtn = document.getElementById('rulesBtn');
const rulePanel = document.getElementById('rulePanel');
const ruleBody = document.getElementById('ruleBody');
const closeRule = document.getElementById('closeRule');
const canvasWrap = document.querySelector('.canvas-wrap');
const gameArea = document.querySelector('.game-area');
const sideInfo = document.querySelector('.side-info');
const topbar = document.querySelector('.topbar');
const mainPanel = document.querySelector('.panel');
const panelHeader = document.querySelector('.panel-header');

const rules = `这里填写游戏规则。`;

function setCanvasSize() {
  const areaRect = gameArea.getBoundingClientRect();
  const infoRect = sideInfo.getBoundingClientRect();
  const topRect = topbar.getBoundingClientRect();
  const areaStyles = getComputedStyle(gameArea);
  const panelStyles = getComputedStyle(mainPanel);
  const columnGap = parseFloat(areaStyles.columnGap || areaStyles.gap || 0);
  const rowGap = parseFloat(panelStyles.rowGap || panelStyles.gap || 0);
  const panelPaddingTop = parseFloat(panelStyles.paddingTop || 0);
  const panelPaddingBottom = parseFloat(panelStyles.paddingBottom || 0);
  const headerRect = panelHeader.getBoundingClientRect();
  const availableWidth = areaRect.width - infoRect.width - columnGap;
  const stacked = availableWidth <= 0;
  const viewportHeight = document.documentElement.clientHeight;
  const panelHeight = viewportHeight - topRect.height - panelPaddingTop - panelPaddingBottom - 64;
  const contentHeight = panelHeight - headerRect.height - rowGap;
  const heightLimit = stacked ? contentHeight - infoRect.height - columnGap : contentHeight;
  const baseSize = Math.min(stacked ? areaRect.width : availableWidth, heightLimit, areaRect.height);
  const size = Math.max(220, Math.floor(baseSize));
  if (!Number.isFinite(size) || size <= 0) return;
  canvasWrap.style.width = `${size}px`;
  canvasWrap.style.height = `${size}px`;
  canvas.width = size;
  canvas.height = size;
}

window.addEventListener('resize', () => {
  setCanvasSize();
  draw();
});

function updateStatus(main, hint) {
  statusText.textContent = main;
  hintText.textContent = hint;
}

function updateLegend(items) {
  legend.innerHTML = '';
  items.forEach((item) => {
    const p = document.createElement('div');
    p.textContent = `• ${item}`;
    legend.appendChild(p);
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#eef3ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

resetBtn.addEventListener('click', () => {
  draw();
});

rulesBtn.addEventListener('click', () => {
  ruleBody.textContent = rules;
  rulePanel.classList.add('show');
  rulePanel.setAttribute('aria-hidden', 'false');
});

closeRule.addEventListener('click', () => {
  rulePanel.classList.remove('show');
  rulePanel.setAttribute('aria-hidden', 'true');
});

requestAnimationFrame(() => {
  setCanvasSize();
  updateStatus('状态提示', '操作提示');
  updateLegend(['说明 1', '说明 2']);
  draw();
});
