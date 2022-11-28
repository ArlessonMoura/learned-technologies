async function getPlanets() {
  const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((data) => data.json());
  return results;
}

export default getPlanets;
