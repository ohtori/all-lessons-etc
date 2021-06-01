const form = document.getElementById('car-form');

async function submitHandler(e) {
  e.preventDefault();
  const car = {
    brand: e.target[0].value.toUpperCase(),
    model: e.target[1].value.toLowerCase(),
    year: e.target[2].value.toLowerCase(),
    VIN: e.target[3].value.toLowerCase(),
    color: e.target[4].value.toLowerCase(),
    price: +e.target[5].value
  }
  try {
  const response = await fetch('/api/create', {
    method: 'POST',
    body: JSON.stringify(car),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  e.target[0].value = '';
  e.target[1].value = '';
  e.target[2].value = '';
  e.target[3].value = '';
  e.target[4].value = '';
  e.target[5].value = '';
  alert(result.message);
  } catch(e) {
    alert(result.message);
  }
}

form.addEventListener('submit', submitHandler);