/* Create a Song class to represent a song.

The class should contain the following properties:

title: title of the song
artist: artist of the song
duration: duration of the song, as a string with minutes and seconds, like this: 3:24
The class has the following methods:

info(): returns a string with information about the song
durationInSeconds(): returns a number with the duration of the song in seconds
For example:

 */

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  info() {
    return `${this.title} by ${this.artist} (${this.duration})`
  }

  durationInSeconds() {
    const [minutes, seconds] = this.duration.split(':').map(Number);
    return (minutes*60 + seconds);
  }
}
const song = new Song("Last Nite", "The Strokes", "3:13");

console.log(song.info()); // Last Nite by The Strokes (3:13)
console.log(song.durationInSeconds()); // 193
