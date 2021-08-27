function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? console.log(Promise.resolve(json)) : Promise.reject(json)
      )
  );
}

module.exports = { fetchURL };