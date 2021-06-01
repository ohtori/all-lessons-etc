async function initUsers(url, method, body) {
  try {
    const response = await fetch(url, {
      method,
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    let resultContent = '';
    result.users.map(user => {
      resultContent += `
        <li>
          <h3>${user.name || null}</h3>
          <p>Registration date: ${user.registerDate || null}</p>
          <p>Age: ${user.age}</p>
          <p>Job: ${user.jobbing || null}</p>
        </li>
      `;
    });
    document.querySelector('.search-result').innerHTML = resultContent;
  } catch(e) {
    console.log(e.message);
  }
}
initUsers('/api/getUsers', 'GET', null);

function createUser(e) {
  e.preventDefault();
  const user = {
    name: e.target[0].value,
    age: e.target[1].value,
    job: e.target[2].value
  }
  initUsers('/api/createUser', 'POST', JSON.stringify(user));
  initUsers('/api/getUsers', 'GET', null);
}

document.getElementById('user-form').addEventListener('submit', createUser);