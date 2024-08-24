
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
let imbd = document.querySelector('#imbd');
let awards = document.querySelector('#awards');
let poster = document.querySelector('#poster');
let writers = document.querySelector('#writers')
let container = document.querySelector('#container')


function searchMovie(){
    let movieInput = document.querySelector("#movieName");
    let query = api + movieInput.value

    // async code fetch returns a promise
    fetch(query).then(data => data.json()).then(data => {
        container.classList.remove('hidden');
        container.classList.add('flex');
        title.innerText = data.Title;
        plot.innerText  = data.Plot;
        genre.innerText = data.Genre;
        director.innerText = data.Director;
        lng.innerText = data.Language;
        awards.innerText = data.Awards;
        year.innerText = data.Year;
        runtime.innerText = data.Runtime;
        writers.innerText = data.Writer;
        poster.src = data.Poster;

    })

    
}

btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor = "#C11119";
})
btn.addEventListener('mouseout',()=>{
    btn.style.backgroundColor = "#d7141d"
})

