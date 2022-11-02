var app = document.getElementById('app');

var listOfFilms = ["Batman", "Joker", "Grren Light", 'Star Wars', 'Pirates of the Caribbean', 'Lord of the Rings', 'Avengers', 'The Dark Fields'];

var copyOfFilms = listOfFilms;


function list() {
    listOfFilms.forEach((item, index) => {
        let li = document.createElement('li');
        li.setAttribute("num", `${index}`);
        li.textContent = item;
        let but = document.createElement('button');
        but.textContent = 'delete';
        but.setAttribute('onclick', 'deleteli()');
        but.setAttribute("class", 'm-1');
        li.append(but);
        app?.appendChild(li);
    });
};
list()
function deleteli() {
    let but = app?.querySelector('button');
    but?.parentElement.remove();
    listOfFilms.splice(this, 1);
    console.log(listOfFilms);
}

var randomFilmOutput = document.getElementById('randomfilmoutput');

function getRandomFilm() {
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    };

    const randomIndex = getRandomInt(copyOfFilms.length);

    var addColor = document.querySelector(`li[num="${randomIndex}"]`);
    addColor?.setAttribute('class', 'text-danger');

    randomFilmOutput.textContent = listOfFilms[randomIndex];
    
    console.log(randomIndex, listOfFilms[randomIndex])
}




