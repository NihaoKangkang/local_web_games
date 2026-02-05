const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('statusText');
const hintText = document.getElementById('hintText');
const legend = document.getElementById('legend');
const resetBtn = document.getElementById('resetBtn');
const undoBtn = document.getElementById('undoBtn');
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

const rules = `在 15x15 棋盘上轮流落子，先在横、竖或斜线上连成五子者获胜。\n点击棋盘落子，黑子先行。`;

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

const gomoku = {
  size: 15,
  board: [],
  current: 1,
  over: false,
  history: []
};

function initGomoku() {
  gomoku.board = Array.from({ length: gomoku.size }, () => Array(gomoku.size).fill(0));
  gomoku.current = 1;
  gomoku.over = false;
  gomoku.history = [];
  updateStatus('轮到：黑子', '点击棋盘落子');
  updateLegend(['黑子先行', '连成五子即胜']);
}

function drawGomoku() {
  const size = gomoku.size;
  const cell = canvas.width / size;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f8f3e8';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#d7c9b1';
  ctx.lineWidth = 1;
  for (let i = 0; i < size; i += 1) {
    ctx.beginPath();
    ctx.moveTo(cell / 2, cell / 2 + i * cell);
    ctx.lineTo(canvas.width - cell / 2, cell / 2 + i * cell);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cell / 2 + i * cell, cell / 2);
    ctx.lineTo(cell / 2 + i * cell, canvas.height - cell / 2);
    ctx.stroke();
  }

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const v = gomoku.board[y][x];
      if (v === 0) continue;
      const cx = cell / 2 + x * cell;
      const cy = cell / 2 + y * cell;
      ctx.beginPath();
      ctx.fillStyle = v === 1 ? '#111827' : '#f8fafc';
      ctx.strokeStyle = '#111827';
      ctx.lineWidth = 2;
      ctx.arc(cx, cy, cell * 0.36, 0, Math.PI * 2);
      ctx.fill();
      if (v === 2) ctx.stroke();
    }
  }
}

function checkGomokuWin(x, y, player) {
  const directions = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ];
  for (const [dx, dy] of directions) {
    let count = 1;
    for (let step = 1; step < 5; step += 1) {
      const nx = x + dx * step;
      const ny = y + dy * step;
      if (nx < 0 || ny < 0 || nx >= gomoku.size || ny >= gomoku.size) break;
      if (gomoku.board[ny][nx] === player) count += 1;
      else break;
    }
    for (let step = 1; step < 5; step += 1) {
      const nx = x - dx * step;
      const ny = y - dy * step;
      if (nx < 0 || ny < 0 || nx >= gomoku.size || ny >= gomoku.size) break;
      if (gomoku.board[ny][nx] === player) count += 1;
      else break;
    }
    if (count >= 5) return true;
  }
  return false;
}

canvas.addEventListener('click', (event) => {
  if (gomoku.over) return;
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(((event.clientX - rect.left) / rect.width) * gomoku.size);
  const y = Math.floor(((event.clientY - rect.top) / rect.height) * gomoku.size);
  if (x < 0 || y < 0 || x >= gomoku.size || y >= gomoku.size) return;
  if (gomoku.board[y][x] !== 0) return;
  gomoku.board[y][x] = gomoku.current;
  gomoku.history.push({ x, y });

  if (checkGomokuWin(x, y, gomoku.current)) {
    gomoku.over = true;
    updateStatus(gomoku.current === 1 ? '黑子获胜！' : '白子获胜！', '点击重新开始继续');
  } else {
    gomoku.current = gomoku.current === 1 ? 2 : 1;
    updateStatus(gomoku.current === 1 ? '轮到：黑子' : '轮到：白子', '继续落子');
  }
  draw();
});

function undoGomoku() {
  if (gomoku.history.length === 0) return;
  const last = gomoku.history.pop();
  gomoku.board[last.y][last.x] = 0;
  gomoku.current = gomoku.current === 1 ? 2 : 1;
  gomoku.over = false;
  updateStatus(gomoku.current === 1 ? '轮到：黑子' : '轮到：白子', '点击棋盘落子');
  draw();
}

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
  drawGomoku();
}

resetBtn.addEventListener('click', () => {
  initGomoku();
  draw();
});

undoBtn.addEventListener('click', undoGomoku);

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
  initGomoku();
  draw();
});
