# [View preview](https://drkl151.github.io/musical-hover-board/hover-board.html)

## How it works?
![hover-board](hover-board.gif)
* When you hover over a square it is colored with a random color from the array.
* Choose music from playlist to make it look even cooler!

__The number of squares changes depending on the value of the variable "SQUEARES_NUMBER":__
```javascript
const SQUEARES_NUMBER = 425;
```

__Colors are stored in a variable "colors":__
```javascript
const colors = ['#06d1b9', '#79d106', '#ff9924', '#0ad100',
  '#ff70b8', '#7aedff', '#ff3d51', '##cc56c2', '#f51616', '#00ff88', '#db16f5', '#8aff70'];
```

__Music plays when you hover over the board:__
```javascript
function playBackgroundAudio() {
  board.addEventListener('mouseover', () => {
    audio.play();
  })

  board.addEventListener('mouseleave', () => {
    audio.pause();
  })
}
```

##  Songs from the playlist:
1. Pyrokinesis - Чемпионы пепла
2. Pyrokinesis - Абсолютно чёрное тело
3. Pyrokinesis - Танцуй полумесяц
4. Pyrokinesis - До последнего люмена
5. Pyrokinesis - Письмо и безразличие

