var playlist = { 'Talking Heads': 'Slippery People' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

//Test code
updatePlayList(playlist, 'David Byrne', 'Some David Byrne Song');
removeFromPlaylist(playlist, 'Talking Heads');
console.log(playlist);
