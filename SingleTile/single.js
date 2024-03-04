

const APIKEY = "b9ab9aa1";

const defaultUrl = `http://www.omdbapi.com/?apikey=${APIKEY}&t=`;


const singleTileTitle = localStorage.getItem("Title");

 const jsondata = JSON.parse(singleTileTitle)
 
 const inputSearch = jsondata.Title

async function getData(inputSearch){

    const responsedata = await fetch(defaultUrl + inputSearch)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      return data
    });
      
    console.log(responsedata);

        document.getElementById("images").setAttribute("src" , responsedata.Poster)

        document.getElementById("h1").innerHTML = responsedata.Title

        document.getElementById("plot").innerHTML = "Plot : <br>" + responsedata.Plot
        document.getElementById("type").innerHTML = "Type : <br>" + responsedata.Type
        document.getElementById("genre").innerHTML = "Genre : <br>" + responsedata.Genre
        document.getElementById("actors").innerHTML = "Actors : <br>" + responsedata.Actors
      }


getData(inputSearch)