/* Task 13: Create a Playlist Class
Create a class called Playlist.
Add properties:
name (e.g., "Chill Vibes")
songs (an array to store song titles, starts empty)
Add methods:
addSong(song) - This method should add a song to the songs array.
removeSong(song) - This method should remove a song from the songs array if it exists.
getSongs() - This method should return a list of all song titles in the playlist. */

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    this.songs = this.songs.filter((item) => item !== song);
  }

  getSongs() {
    return this.songs;
  }
}


const playlist = new Playlist("Chill Vibes");

playlist.addSong("Cheap thrills");
playlist.addSong("thunder");
playlist.addSong("grind");
console.log(playlist.getSongs());
playlist.removeSong("thunder");
console.log(playlist.getSongs());
