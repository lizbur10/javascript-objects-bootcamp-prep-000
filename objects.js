var playlist = { 'Talking Heads': 'Slippery People', 'Elvis Costello': 'Watching the Detectives' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

//Test code
updatePlaylist(playlist, 'David Byrne', 'Some David Byrne Song');
removeFromPlaylist(playlist, 'Talking Heads');
console.log(playlist);
