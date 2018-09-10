const fetch = require("node-fetch");
var inputId = process.argv[2];
var URL = "https://swapi.co/api/people/";

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
    try {
      const name = await fetch(URL + id).then(res => res.json());
      const film = await fetch(name.films[0]).then(res => res.json());
      const specie = await fetch(film.species[0]).then(res => res.json());
      const planet = await fetch(specie.homeworld).then(res => res.json());
      console.log("Name: " + name.name + "\n Title: " + film.title + "\n Specie: " + specie.name + "\n Planet: " + planet.name);
    }
    catch (err) {
      console.log(err);
    }
  }

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(inputId);