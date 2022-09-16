let cont = document.querySelector(".container");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((e) => {
      let html_code = `<a href="${e.link}"><div class="card">
      <div class="name">${e.name}</div>
  </div><a>`;
      cont.innerHTML += html_code;
    });
  });
