// Methods that modify the original array (Mutability).

// shift()
// elimina EL PRIMER de la lista
const colors = ['yellow', 'blue', 'red'];
const removedColors = colors.shift(); 

console.log(colors); // [ 'blue', 'red' ]
console.log(removedColors);

// unshift()
// Agrega elementos a la lista AL PRINCIPIO
const newColors = colors.unshift('pink', 'purple');
console.log(colors);
console.log(newColors);

// Managing a Playlist

function managePlaylist (playlist, newSong){
    playlist.shift(); // elimina el primero
    playlist.unshift(newSong); // lo sustituye por la nueva canción
    return playlist;
}

const initialPlaylist = ['Sweater Weather', 'What you know', 'Eventually'];
const newSongToAdd = 'The adults are talking';

console.log('Initial playlist: ', initialPlaylist); // [ 'Sweater Weater', 'What you know', 'Eventually' ]

const updatedPlayslist = managePlaylist(initialPlaylist, newSongToAdd);

console.log('New song to add: ', newSongToAdd); // The adults are talking
console.log('Updated playlist: ', updatedPlayslist); //  'The adults are talking', 'What you know', 'Eventually' ]
