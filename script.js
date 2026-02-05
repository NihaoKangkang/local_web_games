const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tabs = document.querySelectorAll('.tab');
const gameTitle = document.getElementById('gameTitle');
const gameDesc = document.getElementById('gameDesc');
const statusText = document.getElementById('statusText');
const hintText = document.getElementById('hintText');
const legend = document.getElementById('legend');
const resetBtn = document.getElementById('resetBtn');
const undoBtn = document.getElementById('undoBtn');
const rulesBtn = document.getElementById('rulesBtn');
const rulePanel = document.getElementById('rulePanel');
const ruleBody = document.getElementById('ruleBody');
const closeRule = document.getElementById('closeRule');
const snakeControls = document.getElementById('snakeControls');
const snakeSpeedControl = document.getElementById('snakeSpeedControl');
const snakeSpeedInput = document.getElementById('snakeSpeed');
const snakeSpeedValue = document.getElementById('snakeSpeedValue');
const snakeMapControl = document.getElementById('snakeMapControl');
const snakeMapSelect = document.getElementById('snakeMap');
const sokobanControls = document.getElementById('sokobanControls');
const levelSelect = document.getElementById('levelSelect');
const sokobanUndoBtn = document.getElementById('sokobanUndo');
const canvasWrap = document.querySelector('.canvas-wrap');
const gameArea = document.querySelector('.game-area');
const sideInfo = document.querySelector('.side-info');
const topbar = document.querySelector('.topbar');
const mainPanel = document.querySelector('.panel');
const panelHeader = document.querySelector('.panel-header');

const snakeLevels = [[
  
],
[
  [5,9],
  [6,9],
  [7,9],
  [8,9],
  [9,9],
  [10,9],
  [11,9],
  [12,9],
  [13,9],
  [14,9]
],
[
  [5,3],
  [5,4],
  [5,5],
  [5,6],
  [5,7],
  [5,8],
  [5,9],
  [5,10],
  [5,11],
  [5,12],
  [5,13],
  [5,14],
  [5,15],
  [14,3],
  [14,4],
  [14,5],
  [14,6],
  [14,7],
  [14,8],
  [14,9],
  [14,10],
  [14,11],
  [14,12],
  [14,13],
  [14,14],
  [14,15]
],
[
  [0,14],
  [1,14],
  [2,14],
  [3,14],
  [4,14],
  [5,1],
  [5,2],
  [5,3],
  [5,4],
  [5,5],
  [5,6],
  [5,7],
  [5,8],
  [5,9],
  [5,10],
  [5,11],
  [5,14],
  [6,14],
  [7,14],
  [8,14],
  [9,14],
  [10,5],
  [11,5],
  [12,5],
  [13,5],
  [14,5],
  [14,9],
  [14,10],
  [14,11],
  [14,12],
  [14,13],
  [14,14],
  [14,15],
  [14,16],
  [14,17],
  [14,18],
  [14,19],
  [15,5],
  [16,5],
  [17,5],
  [18,5],
  [19,5]
],
[
  [5,4],
  [5,5],
  [5,6],
  [5,7],
  [5,8],
  [5,9],
  [5,10],
  [5,11],
  [5,12],
  [5,13],
  [5,14],
  [5,15],
  [5,16],
  [6,4],
  [6,16],
  [7,4],
  [7,16],
  [8,4],
  [8,16],
  [9,4],
  [9,16],
  [10,4],
  [10,16],
  [11,4],
  [11,16],
  [12,4],
  [12,16],
  [13,4],
  [13,16],
  [14,5],
  [14,6],
  [14,7],
  [14,8],
  [14,9],
  [14,10],
  [14,11],
  [14,12],
  [14,13],
  [14,14],
  [14,15]
],
[
  [2,1],
  [2,2],
  [2,3],
  [2,4],
  [2,5],
  [2,6],
  [2,7],
  [2,8],
  [2,12],
  [2,13],
  [2,14],
  [2,15],
  [2,16],
  [2,17],
  [2,18],
  [2,19],
  [5,1],
  [5,2],
  [5,3],
  [5,4],
  [5,5],
  [5,6],
  [5,7],
  [5,8],
  [5,12],
  [5,13],
  [5,14],
  [5,15],
  [5,16],
  [5,17],
  [5,18],
  [5,19],
  [7,1],
  [7,2],
  [7,3],
  [7,4],
  [7,5],
  [7,6],
  [7,7],
  [7,8],
  [7,12],
  [7,13],
  [7,14],
  [7,15],
  [7,16],
  [7,17],
  [7,18],
  [7,19],
  [9,1],
  [9,2],
  [9,3],
  [9,4],
  [9,5],
  [9,6],
  [9,7],
  [9,8],
  [9,12],
  [9,13],
  [9,14],
  [9,15],
  [9,16],
  [9,17],
  [9,18],
  [9,19],
  [12,1],
  [12,2],
  [12,3],
  [12,4],
  [12,5],
  [12,6],
  [12,7],
  [12,8],
  [12,12],
  [12,13],
  [12,14],
  [12,15],
  [12,16],
  [12,17],
  [12,18],
  [12,19],
  [14,1],
  [14,2],
  [14,3],
  [14,4],
  [14,5],
  [14,6],
  [14,7],
  [14,8],
  [14,12],
  [14,13],
  [14,14],
  [14,15],
  [14,16],
  [14,17],
  [14,18],
  [14,19],
  [17,1],
  [17,2],
  [17,3],
  [17,4],
  [17,5],
  [17,6],
  [17,7],
  [17,8],
  [17,12],
  [17,13],
  [17,14],
  [17,15],
  [17,16],
  [17,17],
  [17,18],
  [17,19]
],
[
  [9,1],
  [9,2],
  [9,3],
  [9,4],
  [9,5],
  [9,6],
  [9,7],
  [9,8],
  [9,9],
  [9,10],
  [9,11],
  [9,12],
  [9,13],
  [9,14],
  [9,15],
  [9,16],
  [9,17],
  [9,18]
],
[
  [2,1],
  [2,2],
  [2,3],
  [2,4],
  [2,5],
  [2,6],
  [2,7],
  [2,8],
  [2,9],
  [2,10],
  [2,11],
  [2,12],
  [2,13],
  [2,14],
  [2,15],
  [5,5],
  [5,6],
  [5,7],
  [5,8],
  [5,9],
  [5,10],
  [5,11],
  [5,12],
  [5,13],
  [5,14],
  [5,15],
  [5,16],
  [5,17],
  [5,18],
  [5,19],
  [7,1],
  [7,2],
  [7,3],
  [7,4],
  [7,5],
  [7,6],
  [7,7],
  [7,8],
  [7,9],
  [7,10],
  [7,11],
  [7,12],
  [7,13],
  [7,14],
  [7,15],
  [9,5],
  [9,6],
  [9,7],
  [9,8],
  [9,9],
  [9,10],
  [9,11],
  [9,12],
  [9,13],
  [9,14],
  [9,15],
  [9,16],
  [9,17],
  [9,18],
  [9,19],
  [12,1],
  [12,2],
  [12,3],
  [12,4],
  [12,5],
  [12,6],
  [12,7],
  [12,8],
  [12,9],
  [12,10],
  [12,11],
  [12,12],
  [12,13],
  [12,14],
  [12,15],
  [14,5],
  [14,6],
  [14,7],
  [14,8],
  [14,9],
  [14,10],
  [14,11],
  [14,12],
  [14,13],
  [14,14],
  [14,15],
  [14,16],
  [14,17],
  [14,18],
  [14,19],
  [17,1],
  [17,2],
  [17,3],
  [17,4],
  [17,5],
  [17,6],
  [17,7],
  [17,8],
  [17,9],
  [17,10],
  [17,11],
  [17,12],
  [17,13],
  [17,14],
  [17,15]
],
[
  [1,2],
  [2,3],
  [2,4],
  [3,4],
  [3,5],
  [4,6],
  [4,7],
  [5,7],
  [5,8],
  [5,9],
  [6,9],
  [6,10],
  [7,11],
  [7,12],
  [8,2],
  [8,3],
  [8,12],
  [8,13],
  [8,14],
  [9,3],
  [9,4],
  [9,14],
  [9,15],
  [10,5],
  [10,6],
  [10,16],
  [10,17],
  [11,6],
  [11,7],
  [11,17],
  [11,18],
  [12,8],
  [12,9],
  [13,9],
  [13,10],
  [13,11],
  [14,11],
  [14,12],
  [15,13],
  [15,14],
  [16,14],
  [16,15],
  [16,16],
  [17,16],
  [17,17],
  [18,17],
  [18,18]
]
];

const rules = {
  gomoku: `在 15x15 棋盘上轮流落子，先在横、竖或斜线上连成五子者获胜。\n点击棋盘落子，黑子先行。`,
  snake: `点击棋盘开始，使用方向键或滑动控制蛇移动。\n吃到食物会变长，撞到墙或自己则游戏结束，可穿越边界。`,
  sokoban: `使用方向键或 WASD 移动角色。\n把所有箱子推到目标点上即获胜，箱子不可拉回。`
};

let currentGame = 'gomoku';
let animationId = null;
let snakeTimer = null;

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

// Gomoku
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
  if (currentGame !== 'gomoku') return;
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

canvas.addEventListener('click', () => {
  if (currentGame !== 'snake') return;
  if (snake.over) return;
  snake.running = true;
  updateStatus(`得分：${snake.score}`, '使用方向键或滑动移动');
});

canvas.addEventListener('touchstart', (event) => {
  if (currentGame !== 'snake' && currentGame !== 'sokoban') return;
  const touch = event.touches[0];
  touchStart = { x: touch.clientX, y: touch.clientY };
});

canvas.addEventListener('touchmove', (event) => {
  if (!touchStart) return;
  const touch = event.touches[0];
  const dx = touch.clientX - touchStart.x;
  const dy = touch.clientY - touchStart.y;
  if (Math.abs(dx) > 25 || Math.abs(dy) > 25) {
    handleSwipe(dx, dy);
    touchStart = null;
  }
  event.preventDefault();
}, { passive: false });

canvas.addEventListener('touchend', () => {
  touchStart = null;
});

function undoGomoku() {
  if (currentGame !== 'gomoku') return;
  if (gomoku.history.length === 0) return;
  const last = gomoku.history.pop();
  gomoku.board[last.y][last.x] = 0;
  gomoku.current = gomoku.current === 1 ? 2 : 1;
  gomoku.over = false;
  updateStatus(gomoku.current === 1 ? '轮到：黑子' : '轮到：白子', '点击棋盘落子');
  draw();
}

// Snake
const snake = {
  grid: 20,
  body: [],
  dir: { x: 1, y: 0 },
  nextDir: { x: 1, y: 0 },
  food: { x: 10, y: 10 },
  over: false,
  score: 0,
  running: false,
  speedValue: 140,
  speedDelay: 140,
  levelIndex: 0,
  walls: new Set(),
  bonus: {
    active: false,
    x: 0,
    y: 0,
    ttl: 0,
    maxTtl: 0
  },
  bonusCooldown: 0
};

function initSnake() {
  snake.walls = buildSnakeWalls(snake.levelIndex);
  const spawn = findSnakeSpawn();
  snake.body = [
    { x: spawn.x + 2, y: spawn.y },
    { x: spawn.x + 1, y: spawn.y },
    { x: spawn.x, y: spawn.y }
  ];
  snake.dir = { x: 1, y: 0 };
  snake.nextDir = { x: 1, y: 0 };
  snake.over = false;
  snake.score = 0;
  snake.running = false;
  snake.bonus.active = false;
  snake.bonusCooldown = 0;
  snake.speedDelay = snake.speedValue;
  placeFood();
  snakeSpeedInput.value = String(snake.speedValue);
  updateSnakeSpeedLabel(snake.speedValue);
  updateStatus('贪吃蛇', '点击棋盘开始，再用方向键或滑动');
  updateLegend(['吃食物变长', '撞到自己结束', '可穿越边界']);
}

function buildSnakeWalls(levelIndex) {
  const coords = snakeLevels[levelIndex] || [];
  const set = new Set();
  coords.forEach(([x, y]) => {
    set.add(`${x},${y}`);
  });
  return set;
}

function findSnakeSpawn() {
  for (let y = 2; y < snake.grid - 2; y += 1) {
    for (let x = 2; x < snake.grid - 4; x += 1) {
      const keys = [
        `${x},${y}`,
        `${x + 1},${y}`,
        `${x + 2},${y}`
      ];
      if (keys.every((k) => !snake.walls.has(k))) {
        return { x, y };
      }
    }
  }
  return { x: 2, y: 2 };
}

function spawnBonus() {
  const cells = [];
  for (let y = 0; y < snake.grid; y += 1) {
    for (let x = 0; x < snake.grid; x += 1) {
      const key = `${x},${y}`;
      const isBody = snake.body.some((p) => p.x === x && p.y === y);
      const isFood = snake.food.x === x && snake.food.y === y;
      if (!isBody && !isFood && !snake.walls.has(key)) {
        cells.push({ x, y });
      }
    }
  }
  if (cells.length === 0) return;
  const pick = cells[Math.floor(Math.random() * cells.length)];
  snake.bonus.active = true;
  snake.bonus.x = pick.x;
  snake.bonus.y = pick.y;
  snake.bonus.maxTtl = Math.max(10, Math.round(10000 / snake.speedDelay));
  snake.bonus.ttl = snake.bonus.maxTtl;
}

function placeFood() {
  const cells = [];
  for (let y = 0; y < snake.grid; y += 1) {
    for (let x = 0; x < snake.grid; x += 1) {
      const key = `${x},${y}`;
      const isBonus = snake.bonus.active && snake.bonus.x === x && snake.bonus.y === y;
      if (!snake.body.some((p) => p.x === x && p.y === y) && !snake.walls.has(key) && !isBonus) {
        cells.push({ x, y });
      }
    }
  }
  snake.food = cells[Math.floor(Math.random() * cells.length)];
}

function updateSnake() {
  if (snake.over || !snake.running) return;
  snake.dir = { ...snake.nextDir };
  const head = snake.body[0];
  let nx = head.x + snake.dir.x;
  let ny = head.y + snake.dir.y;
  if (nx < 0) nx = snake.grid - 1;
  if (nx >= snake.grid) nx = 0;
  if (ny < 0) ny = snake.grid - 1;
  if (ny >= snake.grid) ny = 0;
  const next = { x: nx, y: ny };
  if (snake.walls.has(`${next.x},${next.y}`)) {
    snake.over = true;
    updateStatus('游戏结束', `得分：${snake.score}`);
    return;
  }
  if (snake.body.some((p) => p.x === next.x && p.y === next.y)) {
    snake.over = true;
    updateStatus('游戏结束', `得分：${snake.score}`);
    return;
  }

  if (snake.bonus.active) {
    snake.bonus.ttl -= 1;
    if (snake.bonus.ttl <= 0) {
      snake.bonus.active = false;
    }
  } else if (snake.bonusCooldown > 0) {
    snake.bonusCooldown -= 1;
  } else if (Math.random() < 0.02) {
    spawnBonus();
  }

  snake.body.unshift(next);
  if (next.x === snake.food.x && next.y === snake.food.y) {
    snake.score += 1;
    placeFood();
  } else {
    snake.body.pop();
  }

  if (snake.bonus.active && next.x === snake.bonus.x && next.y === snake.bonus.y) {
    const ratio = snake.bonus.ttl / snake.bonus.maxTtl;
    const bonusScore = Math.max(1, Math.ceil(10 * ratio));
    snake.score += bonusScore;
    snake.bonus.active = false;
    snake.bonusCooldown = 40;
  }
  updateStatus(`得分：${snake.score}`, '使用方向键或滑动移动');
}

function drawSnake() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#eef3ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cell = canvas.width / snake.grid;
  ctx.fillStyle = '#2f2f2f';
  snake.walls.forEach((key) => {
    const [x, y] = key.split(',').map(Number);
    ctx.fillRect(x * cell, y * cell, cell, cell);
  });

  ctx.fillStyle = '#ff6f5c';
  ctx.beginPath();
  ctx.arc((snake.food.x + 0.5) * cell, (snake.food.y + 0.5) * cell, cell * 0.35, 0, Math.PI * 2);
  ctx.fill();

  if (snake.bonus.active) {
    const bx = (snake.bonus.x + 0.5) * cell;
    const by = (snake.bonus.y + 0.5) * cell;
    const radius = cell * 0.32;
    const grad = ctx.createRadialGradient(bx, by, 2, bx, by, radius);
    grad.addColorStop(0, '#fff3b0');
    grad.addColorStop(1, '#f59e0b');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(bx, by, radius, 0, Math.PI * 2);
    ctx.fill();
    const ratio = snake.bonus.ttl / snake.bonus.maxTtl;
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(bx, by, radius + 4, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * ratio);
    ctx.stroke();
  }

  const bodyGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  bodyGradient.addColorStop(0, '#2a6df4');
  bodyGradient.addColorStop(1, '#60a5fa');
  snake.body.forEach((p, i) => {
    if (i === 0) {
      const emoji = snake.over ? '💀' : '😊';
      ctx.font = `${Math.floor(cell * 0.7)}px 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(emoji, (p.x + 0.5) * cell, (p.y + 0.5) * cell);
    } else {
      ctx.fillStyle = bodyGradient;
      const rx = p.x * cell + cell * 0.12;
      const ry = p.y * cell + cell * 0.12;
      const size = cell * 0.76;
      const r = cell * 0.2;
      ctx.beginPath();
      ctx.moveTo(rx + r, ry);
      ctx.arcTo(rx + size, ry, rx + size, ry + size, r);
      ctx.arcTo(rx + size, ry + size, rx, ry + size, r);
      ctx.arcTo(rx, ry + size, rx, ry, r);
      ctx.arcTo(rx, ry, rx + size, ry, r);
      ctx.closePath();
      ctx.fill();
    }
  });

  ctx.strokeStyle = '#dbe2f3';
  for (let i = 0; i <= snake.grid; i += 1) {
    ctx.beginPath();
    ctx.moveTo(0, i * cell);
    ctx.lineTo(canvas.width, i * cell);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i * cell, 0);
    ctx.lineTo(i * cell, canvas.height);
    ctx.stroke();
  }
}

function startSnakeLoop() {
  clearInterval(snakeTimer);
  snakeTimer = setInterval(() => {
    if (currentGame !== 'snake') return;
    updateSnake();
    draw();
  }, snake.speedDelay);
}

function setSnakeDirection(x, y) {
  if (currentGame !== 'snake') return;
  if (snake.dir.x + x === 0 && snake.dir.y + y === 0) return;
  snake.nextDir = { x, y };
  snake.running = true;
}

function updateSnakeSpeedLabel(value) {
  const v = Number(value);
  if (v <= 90) snakeSpeedValue.textContent = '快速';
  else if (v <= 140) snakeSpeedValue.textContent = '中速';
  else snakeSpeedValue.textContent = '慢速';
}

// Touch swipe controls (snake & sokoban)
let touchStart = null;

function handleSwipe(dx, dy) {
  if (Math.abs(dx) < 25 && Math.abs(dy) < 25) return;
  if (Math.abs(dx) > Math.abs(dy)) {
    if (dx > 0) {
      if (currentGame === 'snake') setSnakeDirection(1, 0);
      if (currentGame === 'sokoban') moveSokoban(1, 0);
    } else {
      if (currentGame === 'snake') setSnakeDirection(-1, 0);
      if (currentGame === 'sokoban') moveSokoban(-1, 0);
    }
  } else {
    if (dy > 0) {
      if (currentGame === 'snake') setSnakeDirection(0, 1);
      if (currentGame === 'sokoban') moveSokoban(0, 1);
    } else {
      if (currentGame === 'snake') setSnakeDirection(0, -1);
      if (currentGame === 'sokoban') moveSokoban(0, -1);
    }
  }
}

// Sokoban
const sokoban = {
  grid: 10,
  levels: [[
  "    #####",
  "    #   #",
  "    #$  #",
  "  ###  $##",
  "  #  $ $ #",
  "### # ## #   ######",
  "#   # ## #####  OO#",
  "# $  $          OO#",
  "##### ### #@##  OO#",
  "    #     #########",
  "    #######"
],
[
  "############",
  "#OO  #     ###",
  "#OO  # $  $  #",
  "#OO  #$####  #",
  "#OO    @ ##  #",
  "#OO  # #  $ ##",
  "###### ##$ $ #",
  "  # $  $ $ $ #",
  "  #    #     #",
  "  ############"
],
[
  "        ########",
  "        #     @#",
  "        # $#$ ##",
  "        # $  $#",
  "        ##$ $ #",
  "######### $ # ###",
  "#OOOO  ## $  $  #",
  "##OOO    $  $   #",
  "#OOOO  ##########",
  "########"
],
[
  "           ########",
  "           #  OOOO#",
  "############  OOOO#",
  "#    #  $ $   OOOO#",
  "# $$$#$  $ #  OOOO#",
  "#  $     $ #  OOOO#",
  "# $$ #$ $ $########",
  "#  $ #     #",
  "## #########",
  "#    #    ##",
  "#     $   ##",
  "#  $$#$$  @#",
  "#    #    ##",
  "###########"
],
[
  "        #####",
  "        #   #####",
  "        # #$##  #",
  "        #     $ #",
  "######### ###   #",
  "#OOOO  ## $  $###",
  "#OOOO    $ $$ ##",
  "#OOOO  ##$  $ @#",
  "#########  $  ##",
  "        # $ $  #",
  "        ### ## #",
  "          #    #",
  "          ######"
],
[
  "######  ###",
  "#OO  # ##@##",
  "#OO  ###   #",
  "#OO     $$ #",
  "#OO  # # $ #",
  "#OO### # $ #",
  "#### $ #$  #",
  "   #  $# $ #",
  "   # $  $  #",
  "   #  ##   #",
  "   #########"
],
[
  "       #####",
  " #######   ##",
  "## # @## $$ #",
  "#    $      #",
  "#  $  ###   #",
  "### #####$###",
  "# $  ### OO#",
  "# $ $ $ OOO#",
  "#    ###OOO#",
  "# $$ # #OOO#",
  "#  ### #####",
  "####"
],
[
  "  ####",
  "  #  ###########",
  "  #    $   $ $ #",
  "  # $# $ #  $  #",
  "  #  $ $  #    #",
  "### $# #  #### #",
  "#@#$ $ $  ##   #",
  "#    $ #$#   # #",
  "#   $    $ $ $ #",
  "#####  #########",
  "  #      #",
  "  #      #",
  "  #OOOOOO#",
  "  #OOOOOO#",
  "  #OOOOOO#",
  "  ########"
],
[
  "          #######",
  "          #  OOO#",
  "      #####  OOO#",
  "      #      O O#",
  "      #  ##  OOO#",
  "      ## ##  OOO#",
  "     ### ########",
  "     # $$$ ##",
  " #####  $ $ #####",
  "##   #$ $   #   #",
  "#@ $  $    $  $ #",
  "###### $$ $ #####",
  "     #      #",
  "     ########"
],
[
  " ###  #############",
  "##@####       #   #",
  "# $$   $$  $ $ OOO#",
  "#  $$$#    $  #OOO#",
  "# $   # $$ $$ #OOO#",
  "###   #  $    #OOO#",
  "#     # $ $ $ #OOO#",
  "#    ###### ###OOO#",
  "## #  #  $ $  #OOO#",
  "#  ## # $$ $ $##OO#",
  "# OO# #  $      #O#",
  "# OO# # $$$ $$$ #O#",
  "##### #       # #O#",
  "    # ######### #O#",
  "    #           #O#",
  "    ###############"
],
[
  "          ####",
  "     #### #  #",
  "   ### @###$ #",
  "  ##      $  #",
  " ##  $ $$## ##",
  " #  #$##     #",
  " # # $ $$ # ###",
  " #   $ #  # $ #####",
  "####    #  $$ #   #",
  "#### ## $         #",
  "#O    ###  ########",
  "#OO OO# ####",
  "#OOO#O#",
  "#OOOOO#",
  "#######"
],
[
  "################",
  "#              #",
  "# # ######     #",
  "# #  $ $ $ $#  #",
  "# #   $@$   ## ##",
  "# #  $ $ $###OOO#",
  "# #   $ $  ##OOO#",
  "# ###$$$ $ ##OOO#",
  "#     # ## ##OOO#",
  "#####   ## ##OOO#",
  "    #####     ###",
  "        #     #",
  "        #######"
],
[
  "   #########",
  "  ##   ##  ######",
  "###     #  #    ###",
  "#  $ #$ #  #  OOO #",
  "# # $#@$## # #O#O #",
  "#  # #$  #    O O #",
  "# $    $ # # #O#O #",
  "#   ##  ##$ $ O O #",
  "# $ #   #  #$#O#O #",
  "## $  $   $  $OOO #",
  " #$ ######    ##  #",
  " #  #    ##########",
  " ####"
],
[
  "       #######",
  " #######     #",
  " #     # $@$ #",
  " #$$ #   #########",
  " # ###OOOOOO##   #",
  " #   $OOOOOO## # #",
  " # ###OOOOOO     #",
  "##   #### ### #$##",
  "#  #$   #  $  # #",
  "#  $ $$$  # $## #",
  "#   $ $ ###$$ # #",
  "#####     $   # #",
  "    ### ###   # #",
  "      #     #   #",
  "      ########  #",
  "             ####"
],
[
  "   ########",
  "   #   #  #",
  "   #  $   #",
  " ### #$   ####",
  " #  $  ##$   #",
  " #  # @ $ # $#",
  " #  #      $ ####",
  " ## ####$##     #",
  " # $#OOOOO# #   #",
  " #  $OO**O $# ###",
  "##  #OOOOO#   #",
  "#   ### #######",
  "# $$  #  #",
  "#  #     #",
  "######   #",
  "     #####"
],
[
  "#####",
  "#   ##",
  "#    #  ####",
  "# $  ####  #",
  "#  $$ $   $#",
  "###@ #$    ##",
  " #  ##  $ $ ##",
  " # $  ## ## O#",
  " #  #$##$  #O#",
  " ###   $OO##O#",
  "  #    #O*OOO#",
  "  # $$ #OOOOO#",
  "  #  #########",
  "  #  #",
  "  ####"
],
[
  "   ##########",
  "   #OO  #   #",
  "   #OO      #",
  "   #OO  #  ####",
  "  #######  #  ##",
  "  #            #",
  "  #  #  ##  #  #",
  "#### ##  #### ##",
  "#  $  ##### #  #",
  "# # $  $  # $  #",
  "# @$  $   #   ##",
  "#### ## #######",
  "   #    #",
  "   ######"
],
[
  "     ###########",
  "     #  O  #   #",
  "     # #O    @ #",
  " ##### ##OO# ####",
  "##  # OO###     ###",
  "# $ #OOO   $ #  $ #",
  "#    OO ##  ## ## #",
  "####$##$# $ #   # #",
  "  ## #    #$ $$ # #",
  "  #  $ # #  # $## #",
  "  #               #",
  "  #  ###########  #",
  "  ####         ####"
],
[
  "  ######",
  "  #   @####",
  "##### $   #",
  "#   ##    ####",
  "# $ #  ##    #",
  "# $ #  ##### #",
  "## $  $    # #",
  "## $ $ ### # #",
  "## #  $  # # #",
  "## # #$#   # #",
  "## ###   # # ######",
  "#  $  #### # #OOOO#",
  "#    $    $   OO#O#",
  "####$  $# $   OOOO#",
  "#       #  ## OOOO#",
  "###################"
],
[
  "    ##########",
  "#####        ####",
  "#     #   $  #@ #",
  "# #######$####  ###",
  "# #    ## #  #$ OO#",
  "# # $     #  #  #O#",
  "# # $  #     #$ OO#",
  "# #  ### ##     #O#",
  "# ###  #  #  #$ OO#",
  "# #    #  ####  #O#",
  "# #$   $  $  #$ OO#",
  "#    $ # $ $ #  #O#",
  "#### $###    #$ OO#",
  "   #    $$ ###OOOO#",
  "   #      ## ######",
  "   ########"
],
[
  "#########",
  "#       #",
  "#       ####",
  "## #### #  #",
  "## #@##    #",
  "# $$$ $  $$#",
  "#  # ## $  #",
  "#  # ##  $ ####",
  "####  $$$ $#  #",
  " #   ##   OOOO#",
  " # #   # #OO O#",
  " #   # # ##OOO#",
  " ##### $  #OOO#",
  "     ##   #####",
  "      #####"
],
[
  "######     ####",
  "#    #######  #####",
  "#   $#  #  $  #   #",
  "#  $  $  $ # $ $  #",
  "##$ $   # @# $    #",
  "#  $ ########### ##",
  "# #   #OOOOOOO# $#",
  "# ##  # OOOOOO#  #",
  "# #   $OOOOOOOO$ #",
  "# # $ #OOOO OO#  #",
  "#  $ $####$#### $#",
  "# $   ### $   $  ##",
  "# $     $ $  $    #",
  "## ###### $ ##### #",
  "#         #       #",
  "###################"
],
[
  "    #######",
  "    #  #  ####",
  "##### $#$ #  ##",
  "#OO #  #  #   #",
  "#OO # $#$ #  $####",
  "#O  #     #$  #  #",
  "#OO   $#  # $    #",
  "#OO@#  #$ #$  #  #",
  "#OO # $#     $#  #",
  "#OO #  #$$#$  #  ##",
  "#OO # $#  #  $#$  #",
  "#OO #  #  #   #   #",
  "##O ####  #####   #",
  " ####  ####   #####"
],
[
  "###############",
  "#OOOOOOOOOO  O####",
  "#OOOOOOOOOO$$O#  #",
  "###########$ #   ##",
  "#      $  $     $ #",
  "## ####   #  $ #  #",
  "#      #   ##  # ##",
  "#  $#  # ##  ### ##",
  "# $ #$###    ### ##",
  "###  $ #  #  ### ##",
  "###    $ ## #  # ##",
  " # $  #  $  $ $   #",
  " #  $  $#$$$  #   #",
  " #  #  $      #####",
  " # @##  #  #  #",
  " ##############"
],
[
  "####",
  "#  ##############",
  "#  #   OO#OOOOOO#",
  "#  # # ##### OOO#",
  "##$#    OOOOOOOO#",
  "#   ##$######  ####",
  "# $ #     ######@ #",
  "##$ # $   ######  #",
  "#  $ #$$$##       #",
  "#      #    #$#$###",
  "# #### #$$$$$    #",
  "# #    $     #   #",
  "# #   ##        ###",
  "# ######$###### $ #",
  "#        #    #   #",
  "##########    #####"
],
[
  " #######",
  " #  #  #####",
  "##  #  #OOO###",
  "#  $#  #OOO  #",
  "# $ #$$ OOO  #",
  "#  $#  #OOO O#",
  "#   # $########",
  "##$       $ $ #",
  "##  #  $$ #   #",
  " ######  ##$$@#",
  "      #      ##",
  "      ########"
],
[
  " #################",
  " #OOO   #    #   ##",
  "##OOOOO  $## # #$ #",
  "#OOOOOO#  $  #    #",
  "#OOOOOO#  #  # #  #",
  "######### $  $ $  #",
  "  #     #$##$ ##$##",
  " ##   $    # $    #",
  " #  ## ### #  ##$ #",
  " # $ $$     $  $  #",
  " # $    $##$ ######",
  " #######  @ ##",
  "       ######"
],
[
  "         #####",
  "     #####   #",
  "    ## $  $  ####",
  "##### $  $ $ ##O#",
  "#       $$  ##OO#",
  "#  ###### ###OO #",
  "## #  #    #OOO #",
  "# $   #    #OOO #",
  "#@ #$ ## ####OOO#",
  "####  $ $$  ##OO#",
  "   ##  $ $  $OOO#",
  "    # $$  $ #  O#",
  "    #   $ $  ####",
  "    ######   #",
  "         #####"
],
[
  "#####",
  "#   ##",
  "# $  #########",
  "## # #       ######",
  "## #   $#$#@  #   #",
  "#  #      $ #   $ #",
  "#  ### ######### ##",
  "#  ## OO*OOOOO # ##",
  "## ## *O*OO*O* # ##",
  "# $########## ##$ #",
  "#  $   $  $    $  #",
  "#  #   #   #   #  #",
  "###################"
],
[
  "       ###########",
  "       #   #     #",
  "#####  #     $ $ #",
  "#   ##### $## # ##",
  "# $ ##   # ## $  #",
  "# $  @$$ # ##$$$ #",
  "## ###   # ##    #",
  "## #   ### #####$#",
  "## #     $  #OOOO#",
  "#  ### ## $ #OOOO##",
  "# $   $ #   #OO$O #",
  "#  ## $ #  ##OOOO #",
  "#####   ######OOO##",
  "    #####    #####"
],
[
  "  ####",
  "  #  #########",
  " ##  ##  #   #",
  " #  $# $@$   ####",
  " #$  $  # $ $#  ##",
  "##  $## #$ $     #",
  "#  #  # #   $$$  #",
  "# $    $  $## ####",
  "# $ $ #$#  #  #",
  "##  ###  ###$ #",
  " #  #OOOO     #",
  " ####OOOOOO####",
  "   #OOOO####",
  "   #OOO##",
  "   #OOO#",
  "   #####"
],
[
  "      ####",
  "  #####  #",
  " ##     $#",
  "## $  ## ###",
  "#@$ $ # $  #",
  "#### ##   $#",
  " #OOOO#$ $ #",
  " #OOOO#   $#",
  " #OOOO  $$ ##",
  " #OOO # $   #",
  " ######$ $  #",
  "      #   ###",
  "      #$ ###",
  "      #  #",
  "      ####"
],
[
  "############",
  "##     ##  #",
  "##   $   $ #",
  "#### ## $$ #",
  "#   $ #    #",
  "# $$$ # ####",
  "#   # # $ ##",
  "#  #  #  $ #",
  "# $# $#    #",
  "#   OO# ####",
  "####OO $ #@#",
  "#OOOOO# $# #",
  "##OOOO#  $ #",
  "###OO##    #",
  "############"
],
[
  " #########",
  " #OOOO   ##",
  " #O#O#  $ ##",
  "##OOOO# # @##",
  "# OOOO#  #  ##",
  "#     #$ ##$ #",
  "## ###  $    #",
  " #$  $ $ $#  #",
  " # #  $ $ ## #",
  " #  ###  ##  #",
  " #    ## ## ##",
  " #  $ #  $  #",
  " ###$ $   ###",
  "   #  #####",
  "   ####"
],
[
  "############ ######",
  "#   #    # ###OOOO#",
  "#   $$#   @  OOOOO#",
  "#   # ###   # OOOO#",
  "## ## ###  #  OOOO#",
  " # $ $     # # ####",
  " #  $ $##  #      #",
  "#### #  #### # ## #",
  "#  # #$   ## #    #",
  "# $  $  # ## #   ##",
  "# # $ $    # #   #",
  "#  $ ## ## # #####",
  "# $$     $$  #",
  "## ## ### $  #",
  " #    # #    #",
  " ###### ######"
],
[
  "            #####",
  "#####  ######   #",
  "#   ####  $ $ $ #",
  "# $   ## ## ##  ##",
  "#   $ $     $  $ #",
  "### $  ## ##     ##",
  "  # ##### #####$$ #",
  " ##$##### @##     #",
  " # $  ###$### $  ##",
  " # $  #   ###  ###",
  " # $$ $ #   $$ #",
  " #     #   ##  #",
  " #######OO O###",
  "    #OOOOOOOOO#",
  "    #OOOOOOOOO#",
  "    ###########"
],
[
  "###########",
  "#OOOOOO   #########",
  "#OOOOOO   #  ##   #",
  "#OO### $    $     #",
  "#OOO $ $ #   ##   #",
  "#OOO#$#####    #  #",
  "###    #   #$  #$ #",
  "  #  $$ $ $  $##  #",
  "  #  $   #$#$ ##$ #",
  "  ### ## #    ##  #",
  "   #  $ $ ## ######",
  "   #    $  $  #",
  "   ##   # #   #",
  "    #####@#####",
  "        ###"
],
[
  "      ####",
  "####### @#",
  "#     $  #",
  "#   $## $#",
  "##$#OOO# #",
  " # $OOO  #",
  " # #O O# ##",
  " #   # #$ #",
  " #$  $    #",
  " #  #######",
  " ####"
],
[
  "             ######",
  " #############OOOO#",
  "##   ##     ##OOOO#",
  "#  $$##  $ @##OOOO#",
  "#      $$ $#  OOOO#",
  "#  $ ## $$ # # OOO#",
  "#  $ ## $  #  OOOO#",
  "## ##### ### ##O###",
  "##   $  $ ##   O  #",
  "# $###  # ##### ###",
  "#   $   #       #",
  "#  $ #$ $ $###  #",
  "# $$$# $   # ####",
  "#    #  $$ #",
  "######   ###",
  "     #####"
],
[
  "    ############",
  "    #          ##",
  "    #  # #$$ $  #",
  "    #$ #$#  ## @#",
  "   ## ## # $ # ##",
  "   #   $ #$  # #",
  "   #   # $   # #",
  "   ## $ $   ## #",
  "   #  #  ##  $ #",
  "   #    ## $$# #",
  "######$$   #   #",
  "#OOOO#  ########",
  "#O#OOO ##",
  "#OOOO   #",
  "#OOOO   #",
  "#########"
],
[
  "           #####",
  "          ##   ##",
  "         ##     #",
  "        ##  $$  #",
  "       ## $$  $ #",
  "       # $    $ #",
  "####   #   $$ #####",
  "#  ######## ##    #",
  "#O            $$$@#",
  "#O# ####### ##   ##",
  "#O# #######O #$ $##",
  "#OOOOOOOOOOO #    #",
  "##############  $ #",
  "             ##  ##",
  "              ####"
],
[
  "     ########",
  "  ####      ######",
  "  #    ## $ $   @#",
  "  # ## ##$#$ $ $##",
  "### OOOOOO#  $$ ##",
  "#   OOOOOO#  #   #",
  "# # OOOOOO#$  $  #",
  "# #$OOOOOO $$# $ #",
  "#   ### ###$  $ ##",
  "###  $  $  $  $ #",
  "  #  $  $  $  $ #",
  "  ######   ######",
  "       #####"
],
[
  "        #######",
  "    #####  #  ####",
  "    #   #   $    #",
  " #### #$$ ## ##  #",
  "##      # #  ## ###",
  "#  ### $#$  $  $  #",
  "#OOO    # ##  #   #",
  "#OOO#    @ # ### ##",
  "#OOO#  ###  $  $  #",
  "######## ##   #   #",
  "          #########"
],
[
  " #####",
  " #   #",
  " # # #######",
  " #      $@######",
  " # $ ##$ ###   #",
  " # #### $    $ #",
  " # ##### #  #$ ####",
  "##  #### ##$      #",
  "#  $#  $  # ## ## #",
  "#         # #OOO# #",
  "######  ###  OOO  #",
  "     #### # #OOO# #",
  "          # ### # #",
  "          #       #",
  "          #########"
],
[
  "##### ####",
  "#OOO# #  ####",
  "#OOO###  $  #",
  "#OOOO## $  $###",
  "##OOOO##   $  #",
  "###OOO ## $ $ #",
  "# ##    #  $  #",
  "#  ## # ### ####",
  "# $ # #$  $    #",
  "#  $ @ $    $  #",
  "#   # $ $$ $ ###",
  "#  ######  ###",
  "# ##    ####",
  "###"
],
[
  "##########",
  "#        ####",
  "# ###### #  ##",
  "# # $ $ $  $ #",
  "#       #$   #",
  "###$  $$#  ###",
  "  #  ## # $##",
  "  ##$#   $ @#",
  "   #  $ $ ###",
  "   # #   $  #",
  "   # ##   # #",
  "  ##  ##### #",
  "  #         #",
  "  #OOOOOOO###",
  "  #OOOOOOO#",
  "  #########"
],
[
  "         ####",
  " #########  ##",
  "##  $      $ #####",
  "#   ## ##   ##OOO#",
  "# #$$ $ $$#$##OOO#",
  "# #   @   #   OOO#",
  "#  $# ###$$   OOO#",
  "# $  $$  $ ##OOOO#",
  "###$       #######",
  "  #  #######",
  "  ####"
],
[
  "  #########",
  "  #*O*#*O*#",
  "  #O*O*O*O#",
  "  #*O*O*O*#",
  "  #O*O*O*O#",
  "  #*O*O*O*#",
  "  ###   ###",
  "    #   #",
  "###### ######",
  "#           #",
  "# $ $ $ $ $ #",
  "## $ $ $ $ ##",
  " #$ $ $ $ $#",
  " #   $@$   #",
  " #  #####  #",
  " ####   ####"
],
[
  "       ####",
  "       #  ##",
  "       #   ##",
  "       # $$ ##",
  "     ###$  $ ##",
  "  ####    $   #",
  "###  # #####  #",
  "#    # #OOOO$ #",
  "# #   $ OOOO# #",
  "#  $ # #O*OO# #",
  "###  #### ### #",
  "  #### @$  ##$##",
  "     ### $     #",
  "       #  ##   #",
  "       #########"
],
[
  "      ############",
  "     ##OO    #   #",
  "    ##OO* $    $ #",
  "   ##OO*O# # # $##",
  "   #OO*O# # # $  #",
  "####OOO#  #    # #",
  "#  ## #          #",
  "# @$ $ ###  #   ##",
  "# $   $   # #   #",
  "###$$   # # # # #",
  "  #   $   # # #####",
  "  # $# #####      #",
  "  #$   #   #    # #",
  "  #  ###   ##     #",
  "  #  #      #    ##",
  "  ####      ######"
],
[
  " #########",
  " #       #",
  " # $ $$ $#",
  "### #  $ #",
  "#O#   $$ ##",
  "#O###   $ #",
  "#O#O $ ## ####",
  "#OOO  $## $  #",
  "#OOO$   $    #",
  "#OO###$### #@#",
  "#OO# #     ###",
  "#### #######"
],
[
  "           ########",
  "           #OOOOOO#",
  "   ####    #OOOOOO#",
  "   #  #########OOO#",
  "   # $   $    #OOO#",
  "   #  # # # # #   #",
  "##### # # #@# #   #",
  "#   # ### ### ## ##",
  "#    $ # $ $ $ # #",
  "# $$$  $   #     #",
  "#   # ###$###$## #",
  "### #  $   #     #",
  " ## $  # $ $ $ ###",
  " #  # ### ### ##",
  " # $          #",
  " #  ###########",
  " ####"
],
[
  "####################",
  "#                ###",
  "# $#   $ ##  $    ##",
  "#    $###    # $$ ##",
  "#O###     $ $ ##  ##",
  "#OOO#  #  #    #$  #",
  "#OO##$$#### $  #   #",
  "#OOO#      $ ##  ###",
  "#OOO$  ###  #    # #",
  "##OO  $#  ##   ##@ #",
  "###O#              #",
  "####################"
],
[
  "####################",
  "#   #    #   #   #@#",
  "# $      $   $   # #",
  "## ###OO## ###     #",
  "#   #OOOO#$#  $### #",
  "# $ #OOOO#  $  $ $ #",
  "#   #OOOO# # # $ $ #",
  "#   ##OO##   #$#   #",
  "##$##    ##  #  #$##",
  "#   $  $     #  #  #",
  "#   #    #   #     #",
  "####################"
],
[
  "####################",
  "#    @##      #   ##",
  "#    ##    $    $ ##",
  "#  ###OOOO# # #  ###",
  "#   #OOOO# # # $   #",
  "### #OOO#  #       #",
  "##  ##O#     $   $ #",
  "##  $ $ ###  # # ###",
  "## $       # # $   #",
  "#### $  $# # # # $ #",
  "####         # #  ##",
  "####################"
],
[
  "####################",
  "#  #  ##    #   @###",
  "##    $    # $###  #",
  "##$# $ ##$# $ $    #",
  "#   $#    $      ###",
  "# ##   $ ###  #OOOO#",
  "# # $# # # # #OOOO##",
  "#    $ $ #  #OOOO###",
  "##$ ###  $ #OOOO####",
  "#  # $        ######",
  "#      # #    ######",
  "####################"
],
[
  "####################",
  "#@     ###   #  #  #",
  "# # #  #  $  $     #",
  "#####     # $ $#$# #",
  "#O#OO#    ##$ $    #",
  "#OOOOO    $   #   ##",
  "#OOOOO    ###$##$###",
  "#O#OO#    $    #   #",
  "#####     #  #$  $ #",
  "#####  #  $    $ $ #",
  "#####  #  #  #  #  #",
  "####################"
],
[
  "####################",
  "##OOO   ## #    #  #",
  "#OOOO         $ ## #",
  "#OOOO# # #$###$    #",
  "#OOO#    #       # #",
  "##O#  #$ #     $## #",
  "#  #  # $ $ ###  $ #",
  "#     $  $ #  # ## #",
  "## # ## #$$# $#  # #",
  "#  #   $ $ #      ##",
  "#    #     #  #   @#",
  "####################"
],
[
  "####################",
  "#   #  #@# ##  #####",
  "# # #  $    $  #####",
  "# #    ###### $  ###",
  "#   #  #OOOO#  $$  #",
  "##$##$##OOOO#      #",
  "#      #OOOO##$##$##",
  "#  $$  #OOOO#      #",
  "# $  $  #  #  ###  #",
  "#####  $   $    $  #",
  "##### #    #  #   ##",
  "####################"
],
[
  "####################",
  "# #     #          #",
  "#       $  ## ### ##",
  "#####  ##   $  $   #",
  "##OO##  # # $ # #  #",
  "#OOOO  $     ##$# ##",
  "#OOOO  $#####   #$##",
  "##OO# #  #   #  $  #",
  "###O# #  $   $  # @#",
  "##  $  $ #   #  ####",
  "##       ###########",
  "####################"
],
[
  "####################",
  "#     ###OO###     #",
  "# $$  ###OO###  $@ #",
  "#  # ##OOOOOO#  $  #",
  "#     #OOOOOO#  $  #",
  "####  ###OO######$ #",
  "#   $$$ #OO#    #  #",
  "# $#   $  $  $$ #$ #",
  "#  #  ## $  ##  #  #",
  "# $    $ ## $    $ #",
  "#  #  ##    ##  #  #",
  "####################"
],
[
  "####################",
  "#    #  # #  #  #  #",
  "# @# # ## $   $   ##",
  "#### #    #  # $   #",
  "#    # ## #$ ## ## #",
  "#      $   $   $   #",
  "#OO###$$## $##$ ## #",
  "#OO#O#  # $   $ #  #",
  "#OOOO# $$   ##$ ####",
  "#OOOO#  #####      #",
  "#OOO###        ##  #",
  "####################"
],
[
  "####################",
  "#OOOO#       #  #  #",
  "#OOOO# # $  $      #",
  "#OOOO ##  $# # $#$ #",
  "#OOO#   $   $#  $  #",
  "#OO####  # $   $$  #",
  "#      #### #### ###",
  "#        #   #     #",
  "# ##   #   $ # $ $ #",
  "# ##    $ ## $  $  #",
  "#     @#     #   # #",
  "####################"
],
[
  "####################",
  "#OOOO###           #",
  "#OOOO##### #  #$# ##",
  "#OOOO###   #$  $   #",
  "#OOOO###    $  #$$##",
  "##  #### $#  #$ $  #",
  "##  ####  $  $  #  #",
  "#@  ####$###$## $  #",
  "##        #  #  $  #",
  "##   ###  #  $  ####",
  "########  #  #     #",
  "####################"
],
[
  "####################",
  "#     #     @#OOO###",
  "#     #      ##OOO##",
  "# # # ##$## ## OOOO#",
  "#   $ #   $$$  OOOO#",
  "###$### $$  ### ##O#",
  "#     $  #    # ####",
  "#  $  #  ###  # #  #",
  "## #$##    $  $$   #",
  "#   $ ##   #  # #  #",
  "#     #    #  #    #",
  "####################"
],
[
  "####################",
  "#     #  #OOO#@    #",
  "# #       OOOO#    #",
  "#  $  #   #OOOO#   #",
  "# ##$#### ##OOOO#  #",
  "# $   $  #  #OOO#  #",
  "# $$ #   #   # $$  #",
  "###  $$$#   $$  $  #",
  "# $  #  #    # $#  #",
  "#   $#  #       $  #",
  "#  #    #    #  #  #",
  "####################"
],
[
  "####################",
  "#####@###O##OOO##  #",
  "#####$  OO#OOO#    #",
  "####    OOOOOO#  $ #",
  "###  $ #OOOOO## # ##",
  "##  $$# #####  $ $ #",
  "## $# $    ##  $$  #",
  "##  #  #    # $  $ #",
  "##   $$ ### #$##   #",
  "## $#      $ $  $ ##",
  "###    #    #    ###",
  "####################"
],
[
  "####################",
  "#@     #   #       #",
  "## ### ##  #### # ##",
  "#    # #  $$       #",
  "#  # # # $ # $ ## ##",
  "#     $ #  #$$ #   #",
  "#  ###  #      ## ##",
  "#OO#O# $ #  $ #    #",
  "#OO#O#  $ # ## $$  #",
  "#OOOO##   $$  $  # #",
  "#OOOOO##        #  #",
  "####################"
],
[
  "####################",
  "#  #      #   #   ##",
  "# $# $ $ ##OOO$  $ #",
  "#  $  # ##OOOO# $  #",
  "# ## $ ##OOOO#   $ #",
  "# $    #OOOO## $   #",
  "# $##  #OOO#       #",
  "#   $$$##$##  ### ##",
  "# # #  #   #  #    #",
  "# $ #  $  ##       #",
  "#    #    #@       #",
  "####################"
],
[
  "####################",
  "#  #  # #    #  #  #",
  "#   $      $ $     #",
  "## #  #$###$##  ## #",
  "#   $     $  #  $  #",
  "# ###$##$#   # $   #",
  "# #   $ $  ###### $#",
  "# $  $$ $  #@#O#OOO#",
  "# #     #  # #O#OOO#",
  "# ########## #OOOOO#",
  "#            #OOOOO#",
  "####################"
],
[
  "####################",
  "#  #     #  ##    ##",
  "# $#   $ #     ##  #",
  "# $  $  #OO#     $ #",
  "# $ $  #OOOO#   # ##",
  "# $#  #OOOOOO### $ #",
  "#   #  #OOOO#  #$  #",
  "# $  ####OO#   #   #",
  "## $   ## # # $  $##",
  "### $    $#@$ $#   #",
  "####   #       #   #",
  "####################"
],
[
  "####################",
  "#      OOOO#    ####",
  "#      OOOO        #",
  "# # ##########     #",
  "# #$   #      ###OO#",
  "#  $   #$$###   #OO#",
  "# $ ### $   $   #OO#",
  "# $ #   $ $ #  ##OO#",
  "#  #  $$ # $ ##   ##",
  "#@## $#  $  $     ##",
  "##       ##   #  ###",
  "####################"
],
[
  "####################",
  "#        #   #@ #  #",
  "# $$  #$$# # #  ## #",
  "#  # $ $ #$$ #     #",
  "## #  #  # # #  #  #",
  "#   ##       #     #",
  "#   # $ #   #   #  #",
  "# $ #$ #   #  $ #OO#",
  "##$ #  ####    #OOO#",
  "#  $          #OOOO#",
  "#   #  #     #OOOOO#",
  "####################"
],
[
  "####################",
  "#     #   #####    #",
  "## $  #   ####  $  #",
  "#### $$   #OO#  #  #",
  "#  $  $  ##OO#### ##",
  "# $   ###OOOO   $$ #",
  "#  #$#   OOOO# # $ #",
  "# #  # $ OO###$#   #",
  "# #   $ #OO#   ##  #",
  "#   $#  ####   # $##",
  "# #  #    @#      ##",
  "####################"
],
[
  "####################",
  "#   #   #    #   #@#",
  "#   $  $     # $ # #",
  "##$# $### #    $$# #",
  "#  #  #O###  #$ $  #",
  "#  #$#OOOO#  # ### #",
  "# $  #OOOOO##    # #",
  "##$  #O#OOOO#$$ $  #",
  "#  ######OO## #  # #",
  "#  $         $ ### #",
  "#   #   #        # #",
  "####################"
],
[
  "####################",
  "# # # #   #@##   # #",
  "#             $    #",
  "#  ##$# ##### $ # ##",
  "##    ##OOOOO#  #  #",
  "##$##$#OOOOO###$#$ #",
  "#   # ##OOOOO#  # ##",
  "#  $    ##OO##  #  #",
  "# $ #   $   $  $$$ #",
  "## $  $# #  #  $   #",
  "#   ##   #  #      #",
  "####################"
],
[
  "######  #####",
  "#    #  #   #",
  "# $  #### $ #",
  "# $      $  #",
  "#  ###@###$ #",
  "########## ###",
  "#OO   ##     #",
  "#OO   ##$    #",
  "#OO   ## $   #",
  "#OO   ## $   #",
  "#OO     $ $  #",
  "###  #########",
  "  ####"
],
[
  "       ###########",
  "       #         #",
  "       #    $ $  #",
  "###### # $ ##### #",
  "#    ##### $  ##$#",
  "#       $ $      #",
  "#          ## ## #",
  "#    ##@##### ## #",
  "#    ####   # ## ##",
  "#OOOO#      # $   #",
  "#OOOO#      #     #",
  "######      #######"
],
[
  "#############",
  "#           #",
  "# ### $$    #",
  "#   # $  $  #",
  "#  $####$######",
  "# $ ##        #####",
  "#  $$ $        OOO#",
  "### ## $$#     OOO#",
  "  # ##   #     OOO#",
  "  #      #     OOO#",
  "  ###@#############",
  "    ###"
],
[
  "  #################",
  "###@##         OOO#",
  "#    #         OOO#",
  "# $  #         OOO#",
  "# $$ #         OOO#",
  "## $ ###$##########",
  " # ###  $ #",
  "##   $  $ #",
  "#  $ #  $ #",
  "# $  #    #",
  "#  $ #    #",
  "#    #    #",
  "###########"
],
[
  "              #####",
  "     ##########   #",
  "     #        #   #",
  "     #  $ $    $$ #",
  "     # ##### ## $ #",
  "     #$$   #$## $ #",
  "     # ### # ##$  #",
  "###### ### $ $    #",
  "#OOOO        ##   #",
  "#OOOO        ######",
  "#OOOO        #",
  "###########@##",
  "          ###"
],
[
  "    ######",
  " ####    #",
  " #    ## #",
  " # $     #",
  "### #### ########",
  "#  $   $ ##  OOO#",
  "#   $$ $$    OOO#",
  "#    $  $##  OOO#",
  "##@## ## ##  OOO#",
  " ###  $  ########",
  " #   $$  #",
  " #    #  #",
  " #########"
],
[
  "####### #########",
  "#     # #   ##  #",
  "# ### # #   $   #",
  "# # $ ###   $   #",
  "#   $$      ##$ #",
  "#    ####   ##  #",
  "#@############ ##",
  "###OO    #####$ #",
  "  #OO    ####   #",
  "  #OO       $$  #",
  "  #OO    #### $ #",
  "  #OO    #  #   #",
  "  ########  #####"
],
[
  "#######",
  "#     ##########",
  "#     #    #  ##",
  "# $   #   $ $  #",
  "#  $  #  $ ##  #",
  "# $$  ##$ $    #",
  "## #  ## #######",
  "## #  ##    OOO#",
  "#  #$       OOO#",
  "#   $$      OOO#",
  "#     ##@#  OOO#",
  "################"
],
[
  "############",
  "#      #   ##",
  "# $  $   #  ######",
  "####  #####      #",
  " #OO  #     #### #",
  " #O####  ####    #",
  " #OOOO    #  $ ####",
  " # OOO#   # $$$#  ##",
  "###O#### ##  $@$   #",
  "#     ##### $ #    #",
  "# #O# $      $###$ #",
  "# #O########  #  $ #",
  "# #OO        ##  $ #",
  "# # ####### $ # #  #",
  "#   #     #       ##",
  "#####     ##########"
],
[
  "################",
  "#       #@ #   #",
  "# # # # # $  $$#",
  "# #OOO# #$$$   #",
  "#  OOO# # $  $$##",
  "# ##O## # ##    #",
  "# #OOO     $    #",
  "# ## ###  #######",
  "#    # ####",
  "######"
],
[
  "    #####",
  " ####   ## #####",
  " #  $    ###   #",
  " # $@$ $    $  #",
  " # #$######## ##",
  " # #  $  #     #",
  " # # $ $ # #   #",
  "## #  $# # #####",
  "#  ##    #     #",
  "#    $ # ###   #",
  "##### ##  #OOOO#",
  "#    $     OOOO#",
  "#         #OOOO#",
  "################"
],
[
  "#############",
  "#OOOOOOOO####",
  "#OOO#### #  #####",
  "#OOO#  ###    $ #",
  "#OOO$$     $ $  #",
  "#  O#  $ $# $  ##",
  "#OOO# #$#   $  #",
  "#O# # $   $    #",
  "#O  #$###$####$#",
  "##  #   $ $    #",
  " #  #  $@$  #  #",
  " #  # #### $  $#",
  " #  #    ###   #",
  " #  # $$ # #####",
  " #  #    #",
  " #########"
],
[
  " ##################",
  " #   $       OOO#O##",
  " #       ####OOOOO #",
  " # #######  #OOOOO #",
  " # #    $ $ ##OOOO##",
  " # #  $ # # ###OOO#",
  " # # $@$ $  ##### #",
  "## #  $  $ $$   $ #",
  "#  #$# $#   # $## #",
  "# ##    ## ## $ # #",
  "# # $# $ $  #     #",
  "# #         #######",
  "# ########$##   #",
  "#        #  $   #",
  "########    #####",
  "       ###  #",
  "         ####"
],
[
  "####################",
  "#OO#    #          #",
  "#O$  $  #$$  $## $##",
  "#O$#  ###  ## ##   #",
  "#  # $ #  $$   $   #",
  "# ###  # #  #$  ####",
  "#  ## # $   #@ #   #",
  "# $    $  ##O##  $ #",
  "#  # $# $# $     ###",
  "#  #  #  #   ###   #",
  "#  ######## #      #",
  "#           #  #O#O#",
  "##$########$#   OOO#",
  "#    O*  #    ##O#O#",
  "# O*OOO*   $  OOOOO#",
  "####################"
]
],
  levelIndex: 0,
  player: { x: 0, y: 0 },
  boxes: [],
  goals: [],
  walls: [],
  history: []
};

function initSokoban() {
  sokoban.boxes = [];
  sokoban.goals = [];
  sokoban.walls = [];
  sokoban.player = { x: 0, y: 0 };
  sokoban.history = [];

  const level = sokoban.levels[sokoban.levelIndex];
  const levelHeight = level.length;
  const levelWidth = Math.max(...level.map((row) => row.length));
  sokoban.grid = Math.max(levelWidth, levelHeight);
  const offsetX = Math.floor((sokoban.grid - levelWidth) / 2);
  const offsetY = Math.floor((sokoban.grid - levelHeight) / 2);

  level.forEach((row, y) => {
    [...row].forEach((cell, x) => {
      const px = x + offsetX;
      const py = y + offsetY;
      if (cell === '#') sokoban.walls.push({ x: px, y: py });
      if (cell === 'O') sokoban.goals.push({ x: px, y: py });
      if (cell === '$') sokoban.boxes.push({ x: px, y: py });
      if (cell === '*') {
        sokoban.boxes.push({ x: px, y: py });
        sokoban.goals.push({ x: px, y: py });
      }
      if (cell === '@') sokoban.player = { x: px, y: py };
      if (cell === '+') {
        sokoban.player = { x: px, y: py };
        sokoban.goals.push({ x: px, y: py });
      }
    });
  });
  updateStatus('推箱子', '把所有箱子推到目标点');
  updateLegend(['箱子不可拉', '全部到位即胜']);
}

function sokobanAt(list, x, y) {
  return list.find((p) => p.x === x && p.y === y);
}

function moveSokoban(dx, dy) {
  if (currentGame !== 'sokoban') return;
  const nx = sokoban.player.x + dx;
  const ny = sokoban.player.y + dy;
  if (sokobanAt(sokoban.walls, nx, ny)) return;
  const snapshot = {
    player: { ...sokoban.player },
    boxes: sokoban.boxes.map((b) => ({ ...b }))
  };
  const box = sokobanAt(sokoban.boxes, nx, ny);
  if (box) {
    const bx = nx + dx;
    const by = ny + dy;
    if (sokobanAt(sokoban.walls, bx, by) || sokobanAt(sokoban.boxes, bx, by)) return;
    box.x = bx;
    box.y = by;
  }
  sokoban.player.x = nx;
  sokoban.player.y = ny;
  sokoban.history.push(snapshot);

  if (sokoban.goals.every((g) => sokobanAt(sokoban.boxes, g.x, g.y))) {
    updateStatus('恭喜过关！', '自动进入下一关');
    setTimeout(() => {
      if (currentGame !== 'sokoban') return;
      if (sokoban.levelIndex + 1 < sokoban.levels.length) {
        goToLevel(sokoban.levelIndex + 1);
      } else {
        updateStatus('全部通关！', '可以选择任意关卡重玩');
      }
    }, 600);
  }
  draw();
}

function undoSokoban() {
  if (currentGame !== 'sokoban') return;
  const last = sokoban.history.pop();
  if (!last) return;
  sokoban.player = { ...last.player };
  sokoban.boxes = last.boxes.map((b) => ({ ...b }));
  draw();
}

function goToLevel(index) {
  const safeIndex = Math.max(0, Math.min(index, sokoban.levels.length - 1));
  sokoban.levelIndex = safeIndex;
  levelSelect.value = String(safeIndex);
  initSokoban();
  draw();
}

function drawSokoban() {
  const cell = canvas.width / sokoban.grid;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  sokoban.walls.forEach((w) => {
    ctx.fillStyle = '#1f2937';
    ctx.fillRect(w.x * cell, w.y * cell, cell, cell);
  });

  sokoban.goals.forEach((g) => {
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc((g.x + 0.5) * cell, (g.y + 0.5) * cell, cell * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(g.x * cell + cell * 0.25, g.y * cell + cell * 0.25);
    ctx.lineTo(g.x * cell + cell * 0.75, g.y * cell + cell * 0.75);
    ctx.moveTo(g.x * cell + cell * 0.75, g.y * cell + cell * 0.25);
    ctx.lineTo(g.x * cell + cell * 0.25, g.y * cell + cell * 0.75);
    ctx.stroke();
  });

  sokoban.boxes.forEach((b) => {
    ctx.fillStyle = '#f97316';
    ctx.fillRect(b.x * cell + cell * 0.1, b.y * cell + cell * 0.1, cell * 0.8, cell * 0.8);
    if (sokobanAt(sokoban.goals, b.x, b.y)) {
      ctx.strokeStyle = '#14532d';
      ctx.lineWidth = 3;
      ctx.strokeRect(b.x * cell + cell * 0.18, b.y * cell + cell * 0.18, cell * 0.64, cell * 0.64);
    }
  });

  ctx.fillStyle = '#2a6df4';
  ctx.beginPath();
  ctx.arc((sokoban.player.x + 0.5) * cell, (sokoban.player.y + 0.5) * cell, cell * 0.3, 0, Math.PI * 2);
  ctx.fill();
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

function setGame(game) {
  currentGame = game;
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.game === game));

  if (game === 'gomoku') {
    gameTitle.textContent = '五子棋';
    gameDesc.textContent = '在 15x15 棋盘上先连成五子者获胜。';
    undoBtn.disabled = false;
    undoBtn.style.display = 'inline-flex';
    snakeControls.style.display = 'none';
    snakeSpeedControl.style.display = 'none';
    snakeMapControl.style.display = 'none';
    sokobanControls.style.display = 'none';
    clearInterval(snakeTimer);
    initGomoku();
  }

  if (game === 'snake') {
    gameTitle.textContent = '贪吃蛇';
    gameDesc.textContent = '吃到食物变长，撞到墙或自己结束。';
    undoBtn.disabled = true;
    undoBtn.style.display = 'none';
    snakeControls.style.display = 'flex';
    snakeSpeedControl.style.display = 'flex';
    snakeMapControl.style.display = 'flex';
    sokobanControls.style.display = 'none';
    snakeMapSelect.value = String(snake.levelIndex);
    initSnake();
    startSnakeLoop();
  }

  if (game === 'sokoban') {
    gameTitle.textContent = '推箱子';
    gameDesc.textContent = '把所有箱子推到目标点上。';
    undoBtn.disabled = true;
    undoBtn.style.display = 'none';
    snakeControls.style.display = 'none';
    snakeSpeedControl.style.display = 'none';
    snakeMapControl.style.display = 'none';
    sokobanControls.style.display = 'flex';
    clearInterval(snakeTimer);
    initSokoban();
  }

  setCanvasSize();
  draw();
}

function draw() {
  if (currentGame === 'gomoku') drawGomoku();
  if (currentGame === 'snake') drawSnake();
  if (currentGame === 'sokoban') drawSokoban();
}

function initLevelOptions() {
  levelSelect.innerHTML = '';
  sokoban.levels.forEach((_, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `第 ${index + 1} 关`;
    if (index === sokoban.levelIndex) option.selected = true;
    levelSelect.appendChild(option);
  });
}

function initSnakeMapOptions() {
  snakeMapSelect.innerHTML = '';
  snakeLevels.forEach((_, index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = `地图 ${index + 1}`;
    if (index === snake.levelIndex) option.selected = true;
    snakeMapSelect.appendChild(option);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    setGame(tab.dataset.game);
  });
});

resetBtn.addEventListener('click', () => {
  if (currentGame === 'gomoku') initGomoku();
  if (currentGame === 'snake') initSnake();
  if (currentGame === 'sokoban') initSokoban();
  draw();
});

undoBtn.addEventListener('click', undoGomoku);
sokobanUndoBtn.addEventListener('click', undoSokoban);

levelSelect.addEventListener('change', () => {
  goToLevel(Number(levelSelect.value));
});

rulesBtn.addEventListener('click', () => {
  ruleBody.textContent = rules[currentGame];
  rulePanel.classList.add('show');
  rulePanel.setAttribute('aria-hidden', 'false');
});

closeRule.addEventListener('click', () => {
  rulePanel.classList.remove('show');
  rulePanel.setAttribute('aria-hidden', 'true');
});

snakeControls.addEventListener('click', (event) => {
  const btn = event.target.closest('.ctrl');
  if (!btn) return;
  const dir = btn.dataset.dir;
  if (dir === 'up') setSnakeDirection(0, -1);
  if (dir === 'down') setSnakeDirection(0, 1);
  if (dir === 'left') setSnakeDirection(-1, 0);
  if (dir === 'right') setSnakeDirection(1, 0);
});

snakeSpeedInput.addEventListener('input', () => {
  snake.speedValue = Number(snakeSpeedInput.value);
  snake.speedDelay = snake.speedValue;
  updateSnakeSpeedLabel(snake.speedValue);
  if (currentGame === 'snake') startSnakeLoop();
});

snakeMapSelect.addEventListener('change', () => {
  snake.levelIndex = Number(snakeMapSelect.value);
  initSnake();
  draw();
});

window.addEventListener('keydown', (event) => {
  if (currentGame === 'snake') {
    if (event.key === 'ArrowUp') setSnakeDirection(0, -1);
    if (event.key === 'ArrowDown') setSnakeDirection(0, 1);
    if (event.key === 'ArrowLeft') setSnakeDirection(-1, 0);
    if (event.key === 'ArrowRight') setSnakeDirection(1, 0);
  }
  if (currentGame === 'sokoban') {
    if (event.key === 'ArrowUp' || event.key === 'w') moveSokoban(0, -1);
    if (event.key === 'ArrowDown' || event.key === 's') moveSokoban(0, 1);
    if (event.key === 'ArrowLeft' || event.key === 'a') moveSokoban(-1, 0);
    if (event.key === 'ArrowRight' || event.key === 'd') moveSokoban(1, 0);
  }
});

requestAnimationFrame(() => {
  setCanvasSize();
  initLevelOptions();
  initSnakeMapOptions();
  updateSnakeSpeedLabel(snake.speedValue);
  setGame('gomoku');
});
