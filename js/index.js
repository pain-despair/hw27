const cars = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg"
];
let randomIndex =
Math.floor(
  Math.random() * cars.length
);
car.src = cars[randomIndex];
console.log(randomIndex);