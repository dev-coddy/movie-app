
let api = "http://www.omdbapi.com/?apikey=35d91523&t="

// fetch(api).then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// })

let btn = document.querySelector("#button");
let title = document.querySelector('#title');
let plot = document.querySelector('#plot');
let genre = document.querySelector('#genre');
let year = document.querySelector('#year');
let runtime = document.querySelector('#runtime');
let director = document.querySelector('#director');
let lng = document.querySelector('#lng');
let imbd = document.querySelector('#imdb');
let awards = document.querySelector('#awards');
let poster = document.querySelector('#poster');
let writers = document.querySelector('#writers')
let container = document.querySelector('#container');
let error = document.querySelector('#error');
let actors = document.querySelector('#actors');
let suggestion = document.querySelector('#suggestion');
function searchMovie(){
    let movieInput = document.querySelector("#movieName");
    let query = api + movieInput.value;

    // to check the input is empty
    if (movieInput.value.trim() === "") {
        error.innerText = 'Movie name required.';
        error.classList.remove('hidden');
        container.classList.add('hidden');
        return;
    }

    // async code fetch returns a promise
    fetch(query).then(data => data.json()).then(data => {
        
        if (data.Error == 'Movie not found!'){
            error.innerText = 'Movie not found!🥲'; 
            container.classList.add('hidden');
            error.classList.remove('hidden');
        }
        else{
            if (data.imdbRating >= 8){
                suggestion.innerText = 'Must Watch';
                suggestion.style.backgroundColor = '#2ECC71';
                suggestion.style.color = '#FFFFFF';
            }else if (data.imdbRating >= 6){
                suggestion.innerText = 'Woth Watching';
                suggestion.style.backgroundColor = '#4169E1';
                suggestion.style.color = '#FFFFFF';
            } else if (data.imdbRating >= 4) {
                suggestion.innerText = 'Average';
                suggestion.style.backgroundColor = '#D3D3D3';
                suggestion.style.color = '#000000';
            } else {
                suggestion.innerText = 'Time Waste'
                suggestion.style.backgroundColor = '#2ECC71';
                suggestion.style.color = '#FFFFFF'; 
            } 
            error.classList.add('hidden');
            container.classList.remove('hidden');
            container.classList.add('flex');
            actors.innerText = data.Actors;
            title.innerText = data.Title;
            plot.innerText  = data.Plot;
            genre.innerText = data.Genre;
            director.innerText = data.Director;
            lng.innerText = data.Language;
            imbd.innerText  = data.imdbRating;
            awards.innerText = data.Awards;
            year.innerText = data.Year;
            runtime.innerText = data.Runtime;
            writers.innerText = data.Writer;
            poster.src = data.Poster;
        }
    })
}

btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor = "#C11119";
})
btn.addEventListener('mouseout',()=>{
    btn.style.backgroundColor = "#d7141d"
})

