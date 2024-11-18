/* Use a loop to iterate over the array and destructure each pair of coordinates into separate x and y variables within the loop body. */

const coordinates = [
    [1, 2],
    [3, 4],
    [5, 6]
 ];

 coordinates.forEach(([x, y]) => {
    console.log(x, y);
 });

