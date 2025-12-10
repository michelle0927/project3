# Frontend Nanodegree Arcade Game

Classic Frogger-style arcade game implemented in vanilla JavaScript.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/udacity/frontend-nanodegree-arcade-game.git
   cd frontend-nanodegree-arcade-game
   ```
2. Install dependencies (none required for the base project).
3. Open `index.html` directly in your browser, or serve the project with a lightweight web server (for example `python3 -m http.server 8000`) to avoid browser security restrictions.

## How to Play

- The object of the game is to get the player to the water at the top of the screen.
- Keyboard controls:
  - Up arrow: move up one space
  - Down arrow: move down one space
  - Left arrow: move left one space
  - Right arrow: move right one space
- Avoid the bugs! Colliding with a bug sends the player back to the start.
- Get to the water to earn a point and reset for another round.

## Troubleshooting

- **Sprites look broken or missing**: Make sure the `images/` directory is served correctly. If running via `file://`, switch to a local HTTP server (`python3 -m http.server 8000`).
- **Keyboard controls don’t respond**: Click anywhere inside the game canvas to focus it, then use the arrow keys. Some browser extensions can also block key events—try disabling them or using an incognito window.
- **Game logic errors after edits**: Check the browser console for JavaScript errors and ensure your edits didn’t remove required variables in `js/app.js`, `js/engine.js`, or `js/resources.js`.

## Arcade Ode

Bugs march in rows, a ticking tide,  
Stones guard the lane where gems may hide.  
Leap toward the gleam, dodge pixel strife,  
Ride waves of luck to extra life.

## Image Description

The provided graphic shows a bright green square with rounded corners and a bold lowercase white letter `p` centered inside it, resembling a minimalist app icon or badge.

Have fun!!