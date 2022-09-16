//user inputed value for the api
let season_year = 0;
let league_id = 0;

let result_cont = document.querySelector(".result");

function set(value, name) {
  //setting season
  if (name === "season") season_year = value;
  //setting league
  else league_id = value;
}

function start() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8db4235ba0msh443a202388b7a15p150573jsn5c37767c9532",
      "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
    },
  };

  fetch(
    "https://api-football-beta.p.rapidapi.com/players/topscorers?season=" +
      season_year +
      "&league=" +
      league_id,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      data.response.forEach((e) => {
        //adding html to create cards for the result;

        let html_code = `
        <div class="card">
            <img src="${e.player.photo}" alt="this is an image" class="img_card">
            <div class="card_name cent">Name : ${e.player.name}</div>
            <div class="card_nationality cent">Nationality : ${e.player.nationality}</div>
            <div class="card_goals cent">Toal Goals : ${e.statistics[0].goals.total}</div>
            <div class="card_assists cent">Assists : ${e.statistics[0].goals.assists}</div>
        </div>`;
        document.querySelector(".container").classList.add("hidden");
        result_cont.innerHTML += html_code;
      });
    })
    .catch((err) => console.error(err));
}
