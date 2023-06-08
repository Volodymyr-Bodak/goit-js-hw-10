import { fetchBreeds } from '/src/cat-api';
import {  fetchCatByBreed } from '/src/cat-api';
const selectBtn = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
document.querySelector('p.error').style.display = 'none';
const temperament = document.querySelector('p.temperament');


loader.classList.add('hidden');

fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.text = breed.name;
      selectBtn.appendChild(option);
    });
  });


selectBtn.addEventListener('change', () => {
  loader.classList.remove('hidden');
  
  fetchCatByBreed(selectBtn.value)
  .then(cats => {
    cats.forEach(info => {
      loader.classList.add('hidden');
      const img = document.querySelector('img');
     img.src = info.url;
     img.width = 360;
     
    
    const breedName = document.querySelector('h2.breed-name');
    breedName.textContent =  info.breeds[0].name;
    const description = document.querySelector('p.description');
    description.textContent =  info.breeds[0].description;
    
    temperament.textContent =  `Temperament:  ${info.breeds[0].temperament}`;

    });
  });

});
console.log(fetchCatByBreed(selectBtn.value));