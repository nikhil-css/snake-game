# 🐍 Snake Game

A classic and fun **Snake Game** built with vanilla HTML, CSS, and JavaScript. Play the timeless arcade game in your browser!

## 🎮 Features

- **Classic Gameplay**: Control the snake to eat food and grow longer
- **Score Tracking**: Keep track of your current and high score
- **Pause/Resume**: Pause the game anytime and resume when ready
- **Keyboard Controls**: Use Arrow Keys or WASD to move
- **Persistent High Score**: Your high score is saved in local storage
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Game Over Detection**: Collision detection for walls and self-collision

## 🕹️ How to Play

1. **Click "Start Game"** to begin
2. **Use Arrow Keys** (↑ ↓ ← →) or **WASD** to move the snake
3. **Eat the red food** to grow and gain 10 points per food
4. **Avoid hitting** the walls or yourself
5. **Pause/Resume** the game anytime
6. **Try to beat** your high score!

## 📊 Scoring

- Each food eaten: **+10 points**
- High scores are automatically saved
- Your best score persists even after closing the browser

## 🎨 Game Elements

- **🟢 Green Snake**: The player-controlled snake
- **🔴 Red Food**: Eat this to grow and score points
- **⬛ Black Canvas**: The game board
- **⬜ Grid**: Visual guide for movement

## 🚀 Getting Started

### Option 1: Play Online
Visit the GitHub Pages link (if deployed):
- [Play Snake Game](https://nikhil-css.github.io/snake-game)

### Option 2: Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhil-css/snake-game.git
   cd snake-game
   ```

2. **Open the game**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```

3. **Start playing!** 🎉

## 📁 Project Structure

```
snake-game/
├── index.html      # HTML structure
├── style.css       # Styling and layout
├── script.js       # Game logic
└── README.md       # Documentation
```

## 🎯 Game Controls

| Key | Action |
|-----|--------|
| ↑ or W | Move Up |
| ↓ or S | Move Down |
| ← or A | Move Left |
| → or D | Move Right |
| Click "Start" | Begin Game |
| Click "Pause" | Pause/Resume |
| Click "Reset" | Reset Game |

## 🧠 Game Mechanics

- **Snake Speed**: Moves every 100ms for consistent gameplay
- **Grid System**: 20x20 tiles for precise movement
- **Food Spawning**: Random placement after each food is eaten
- **Growth**: Snake grows by 1 segment for each food eaten
- **Collision**: Game ends on wall or self-collision

## 💾 Data Persistence

- High scores are stored in **Local Storage**
- Your best score is automatically saved and retrieved
- Data persists across browser sessions

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript (Vanilla)**: No frameworks, pure game logic
- **Canvas API**: For game rendering
- **Local Storage API**: For high score persistence

## 📱 Responsive Design

The game is fully responsive and works on:
- 🖥️ Desktop (Chrome, Firefox, Safari, Edge)
- 💻 Tablets
- 📱 Mobile devices

## 🎓 Learning Resources

This project demonstrates:
- Canvas drawing and rendering
- Keyboard event handling
- Game loop implementation
- Collision detection algorithms
- Local storage usage
- Responsive CSS design

## 🐛 Known Issues

None at the moment! Feel free to report bugs or suggest improvements.

## 📝 Future Enhancements

- [ ] Multiple difficulty levels
- [ ] Sound effects and background music
- [ ] Leaderboard system
- [ ] Power-ups and special items
- [ ] Different game modes
- [ ] Mobile touch controls
- [ ] Animation effects

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**nikhil-css** - Created this fun Snake Game

---

**Enjoy the game and have fun! 🐍🎮**

*Made with ❤️ and JavaScript*
