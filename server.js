const express = require('express');
const app = express();

const movies = [
    {
      id: 1,
      name: "The Shawshank Redemption",
      year: 1994,
      director: "Frank Darabont",
      duration: "2h 22min",
      genre: ["Crime", "Drama"],
      rate: 9.3,
    },
    {
      id: 2,
      name: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      duration: "2h 55min",
      genre: ["Crime", "Drama"],
      rate: 9.2,
    },
  ];

app.get('/', (req, res) => {
    res.send("Hello World from Rukesh and Hasini");
});

app.listen(8080, ()=> {
    console.log("Server is Up and running in 8080 port");
});