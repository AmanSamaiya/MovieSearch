const APIKEY = "b9ab9aa1";

const defaultUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&s=`;

async function getData(inputSearch) {
  var responsedata = await fetch(defaultUrl + inputSearch)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });

  responsedata.Search.map((el, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "Tile");

    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", el.Poster);
    cardImg.setAttribute("class", "images");

    const card_h3 = document.createElement("h3");
    card_h3.innerHTML = el.Title;

    const card_btn = document.createElement("button");
    card_btn.innerHTML = "Read";
    card_btn.setAttribute("class", "ReadButton");
    card_btn.setAttribute("id", el.Title);

    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(card_h3);
    cardDiv.appendChild(card_btn);

    document.getElementById("movieTiles").appendChild(cardDiv);
  });

  singlepagebtn();
  responsedata = [];
}

document.getElementById("inputext").addEventListener("change", (e) => {
  const inputSearch = e.target.value;
  getData(inputSearch);
});

function singlepagebtn() {
  // opening single Tile Page
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.classList[0] == "ReadButton") {
      console.log(button);
      button.addEventListener("click", () => {
        var id = { Title: button.id };
        var buttonId = JSON.stringify(id);
        localStorage.setItem("Title", buttonId);
        window.location.href = "http://127.0.0.1:8080/SingleTile/single.html";
      });
    }
  });
}
