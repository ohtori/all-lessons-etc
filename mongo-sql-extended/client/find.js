const findForm = document.getElementById('car-filter-form');

async function findHandler(e) {
  e.preventDefault();
  const parametrs = {
    brand: e.target[0].value.toUpperCase(),
    model: e.target[1].value.toLowerCase(),
    year: e.target[2].value.toUpperCase(),
    VIN: e.target[3].value.toLowerCase(),
    color: e.target[4].value.toLowerCase(),
    minPrice: e.target[5].value,
    maxPrice: e.target[6].value
  }
  try {
    const response = await fetch('/api/find', {
      method: 'POST',
      body: JSON.stringify(parametrs),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result.message);
    let searchResult = '';
    result.cars.map(car => {
      searchResult += `<li class="col s12">
        <h3>${car.brand} <strong>${car.model.toUpperCase()}</strong></h3>
        <p>Color: ${car.color}</p>
        <p>VIN: ${car.VIN}</p>
        <p>Year: ${car.year}</p>
        <p>Price: ${car.price}</p>
        <p>Category desc(Experimental field): ${result.desc ? result.desc : 'No description'}</p>
      </li>`
    });
    document.querySelector('.search-result').innerHTML = searchResult;
  } catch(e) {
    alert(e.message);
  }
}

findForm.addEventListener('submit', findHandler);