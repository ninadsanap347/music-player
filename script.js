const audioPlayer = document.getElementById('audioPlayer');
const nowPlaying = document.getElementById('now-playing');
let buttons = document.querySelectorAll('button');
let currentIndex = -1;
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
const titles = ['Aahun Aahun', 'Jeena Jeena', 'Dhinka Chika'];

function playSong(filename, btn) {
  audioPlayer.src = 'song.mp3/' + filename;
  audioPlayer.play();
  nowPlaying.textContent = 'Now Playing: ' + btn.textContent;

  // Remove active from all buttons
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  currentIndex = songs.indexOf(filename);
}

// Auto-play next song
audioPlayer.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(songs[currentIndex], buttons[currentIndex]);
});
