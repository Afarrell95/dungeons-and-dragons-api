let btn = document.querySelector('button');
let monster = document.querySelector('img');

btn.addEventListener('click', getFetch())

function getFetch() {
    const index = 'aboleth'
    const url = `https://www.dnd5eapi.co/api/monsters/${index}`;
    fetch(url)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => {
        console.log(data);
      })
    
      .catch((err) => {
        console.log(`error ${err}`);
      }); 
  }