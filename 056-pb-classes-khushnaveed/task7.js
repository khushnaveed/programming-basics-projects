/* ask 7: Create a Movie Class
Create a class called Movie.
Add properties:
title (e.g., "Inception")
director (e.g., "Christopher Nolan")
rating (e.g., 8.8)
duration (e.g., 148) - in minutes
Add methods:
getInfo() - This method should return a string containing the movie's title, director, and rating.
getDurationInHours() - This method should return the movie duration in hours (convert minutes to hours and round to two decimal places).
 */

class Movie {
    constructor(title, director, rating, duration) {
        this.title = title;
        this.director = director;
        this.rating = rating;
        this. duration = duration;
    }

    getInfo(){
        return `title: ${this.title}\ndirector: ${this.director}\nrating: ${this.rating}`
    }

    getDurationInHours(){
        return parseFloat((this.duration/60).toFixed(2));
    }
}

const movie = new Movie("abc", "kbn", 5, 148)
console.log(movie.getInfo());
console.log(movie.getDurationInHours());