const BASE_URL = 'https://www.omdbapi.com/?apikey=ff1edd93&t=';

export const getMovie = title => fetch(`${BASE_URL}${title}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
