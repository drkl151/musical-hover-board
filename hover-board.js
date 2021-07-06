const board = document.querySelector('#board');
const SQUEARES_NUMBER = 425;
const colors = ['#06d1b9', '#79d106', '#ff9924', '#0ad100',
  '#ff70b8', '#7aedff', '#ff3d51', '##cc56c2', '#f51616', '#00ff88', '#db16f5', '#8aff70'];
const wrapper = document.querySelector('.wrapper');
const backgroundImages = [
  {
    pathImage: 'background-hover-board.jpeg',
    possionX: 0,
    possionY: 0,
  },

  {
    pathImage: 'background-hover-board-2.jpeg',
    possionX: -10,
    possionY: 0,
  },

  {
    pathImage: 'background-hover-board-3.jpg',
    possionX: 0,
    possionY: 0,
  },

  {
    pathImage: 'background-hover-board-4.jpg',
    possionX: 0,
    possionY: 0,
  },
];

let currentIndexImage = 0;
wrapper.style.backgroundImage = `url(./img-background/${backgroundImages[0].pathImage})`
wrapper.style.backgroundPosition = `${backgroundImages[0].possionX}px ${backgroundImages[0].possionY}px`

for (let i = 0; i < SQUEARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square);
}

changeMusic();
function changeMusic() {
  const iconPlaylist = document.querySelector('#icon-playlist-block');
  const audioBlock = document.querySelector('#audio');
  const playlistBlock = document.querySelector('.playlist');
  const backgroundAudio = [

    {
      title: 'Чемпионы пепла',
      src: './playlist/aud-playlist/pyrokinesis-ash_champions.mp3',
    },

    {
      title: 'Абсолютно чёрное тело',
      src: './playlist/aud-playlist/pyrokinesis-completely_black_body.mp3',
    },

    {
      title: 'Танцуй полумесяц',
      src: './playlist/aud-playlist/pyrokinesis-crescent_dance.mp3',
    },

    {
      title: 'До последнего люмена',
      src: './playlist/aud-playlist/pyrokinesis-to_the_last_lumen.mp3',
    },

    {
      title: 'Письмо и безразличие',
      src: './playlist/aud-playlist/pyrokinesis-writing_and_indifference.mp3',
    }
  ];

  iconPlaylist.addEventListener('click', () => {
    if (playlistBlock.style.display === 'block') {
      playlistBlock.style.display = 'none';
    } else {
      playlistBlock.style.display = 'block';
    }
  })

  backgroundAudio.forEach((audio) => {
    let newAudio = document.createElement('p')
    newAudio.innerHTML = audio.title;
    newAudio.classList.add('playlist__audio-title');
    playlistBlock.append(newAudio);
    newAudio.addEventListener('click', () => {
      const allAudioText = document.querySelectorAll('.playlist__audio-title');

      allAudioText.forEach((text) => {
        text.classList.remove('active');

      })
      audioBlock.src = audio.src;
      newAudio.classList.add('active');
    });
  });
};

playBackgroundAudio();
function playBackgroundAudio() {
  board.addEventListener('mouseover', () => {
    audio.play();
  })

  board.addEventListener('mouseleave', () => {
    audio.pause();
  })
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = 'rgb(65, 65, 65)';
  element.style.boxShadow = `0 0 2px black`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

setInterval(() => {
  currentIndexImage++;
  if (currentIndexImage === backgroundImages.length) {
    currentIndexImage = 0;
  }

  wrapper.style.backgroundImage = `url(./img-background/${backgroundImages[currentIndexImage].pathImage})`;
  wrapper.style.backgroundPosition = `${backgroundImages[currentIndexImage].possionX}px
   ${backgroundImages[currentIndexImage].possionY}px`
}, 8000);
