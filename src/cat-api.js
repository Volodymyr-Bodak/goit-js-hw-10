export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => response.json())
      .then(data => {
        return data.map(breed => ({
          id: breed.id,
          name: breed.name
        }));
        
      })

      .catch(error => {
        console.log('Сталася помилка', error);
        document.querySelector('p.error').style.display = 'block';
      })
}
const apiKey = 'live_h08GLhTLAI24w7YyO9RYmkhKaoh46gCBNi3fxKhODvXaiS6XqSpv9TrhxghZthDp';

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/IMAGES/search?breed_ids=${breedId}&api_key=${apiKey}`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => {
        console.log('An error occurred:', error);
        document.querySelector('p.error').style.display = 'block';
      });
  }
  
  
