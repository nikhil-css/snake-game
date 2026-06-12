const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const highScoreDisplay = document.getElementById('highScore');
const gameStatusDisplay = document.getElementById('gameStatus');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Game variables
const gridSize = 20;
const tileCount = canvas.width / gridSize;
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
highScoreDisplay.textContent = highScore;

let snake = [
    { x: 10, y: 10 }
];

let food = {
    x: Math.floor(Math.random() * tileCount),
    y: Math.floor(Math.random() * tileCount)
};

let dx = 0;
let dy = 0;
let nextDx = 0;
let nextDy = 0;
let gameRunning = false;
let gamePaused = false;
let gameOver = false;
let gameSpeed = 100; // Initial speed in milliseconds
const initialSpeed = 100;
const minSpeed = 30; // Minimum speed (maximum game speed)

// Event listeners
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', togglePause);
resetBtn.addEventListener('click', resetGame);

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
    if (!gameRunning || gamePaused) return;

    const key = e.key.toLowerCase();

    // Arrow keys
    if (e.key === 'ArrowUp' || key === 'w') {
        if (dy === 0) { nextDx = 0; nextDy = -1; }
    }
    if (e.key === 'ArrowDown' || key === 's') {
        if (dy === 0) { nextDx = 0; nextDy = 1; }
    }
    if (e.key === 'ArrowLeft' || key === 'a') {
        if (dx === 0) { nextDx = -1; nextDy = 0; }
    }
    if (e.key === 'ArrowRight' || key === 'd') {
        if (dx === 0) { nextDx = 1; nextDy = 0; }
    }
}

function updateGameSpeed() {
    // Speed increases by 1ms for every 10 points
    // Score 0 = 100ms, Score 10 = 99ms, Score 100 = 90ms, Score 700 = 30ms (max speed)
    gameSpeed = Math.max(minSpeed, initialSpeed - Math.floor(score / 10));
}

function startGame() {
    if (gameRunning) return;
    gameRunning = true;
    gameOver = false;
    gamePaused = false;
    score = 0;
    gameSpeed = initialSpeed;
    scoreDisplay.textContent = score;
    snake = [{ x: 10, y: 10 }];
    dx = 1;
    dy = 0;
    nextDx = 1;
    nextDy = 0;
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
    resetBtn.style.display = 'inline-block';
    gameStatusDisplay.textContent = '🎮 Game Running!';
    gameLoop();
}

function togglePause() {
    gamePaused = !gamePaused;
    pauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
    gameStatusDisplay.textContent = gamePaused ? '⏸️ Game Paused' : '🎮 Game Running!';
    if (!gamePaused) {
        gameLoop();
    }
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
    dx = 0;
    dy = 0;
    nextDx = 0;
    nextDy = 0;
    score = 0;
    gameSpeed = initialSpeed;
    scoreDisplay.textContent = score;
    gameRunning = false;
    gameOver = false;
    gamePaused = false;
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    pauseBtn.textContent = 'Pause';
    gameStatusDisplay.textContent = 'Use Arrow Keys or WASD to move';
    draw();
}

function gameLoop() {
    if (gamePaused || gameOver) return;

    // Update snake direction
    dx = nextDx;
    dy = nextDy;

    // Move snake
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
        return;
    }

    // Check self collision
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        endGame();
        return;
    }

    snake.unshift(head);

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreDisplay.textContent = score;
        updateGameSpeed(); // Update speed based on new score
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    } else {
        snake.pop();
    }

    draw();
    setTimeout(gameLoop, gameSpeed); // Use dynamic gameSpeed instead of fixed 100
}

function endGame() {
    gameRunning = false;
    gameOver = true;
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
    startBtn.textContent = 'Play Again';
    gameStatusDisplay.textContent = `💀 Game Over! Final Score: ${score}`;

    // Update high score
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('snakeHighScore', highScore);
        highScoreDisplay.textContent = highScore;
    }
}

function draw() {
    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid (optional)
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
        if (index === 0) {
            ctx.fillStyle = '#00ff00';
        } else {
            ctx.fillStyle = '#00cc00';
        }
        ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2);
    });

    // Draw food
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(food.x * gridSize + 1, food.y * gridSize + 1, gridSize - 2, gridSize - 2);
}

// Initial draw
draw();
