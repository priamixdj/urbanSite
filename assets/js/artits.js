document.addEventListener('DOMContentLoaded', () => {
    const artistDivs = document.querySelectorAll('.artist');
    const artistArray = Array.from(artistDivs);
    // Ora artistArray contiene tutti i div con la classe "artist" all'interno della sezione "arrayTop_artists"
    console.log(artistArray);


    if (topArtist_cont) {
        for(let i = 0; i < artistArray.length; i++) {
            if(i % 2 === 1) { // se è dispari a destra (inizia da 0)
                artistArray[i].classList.add('right');
            }
        }
    }
   
});




class Artist {
    constructor(nome, img, desc, ) {
        this.nome = nome;
        this.img = img;
        if (desc == 'undefined' || desc == null) this.desc = null;
        else this.desc = desc;
    }

    getName() {
        return this.nome;
    }
    getDesc() {
        return this.desc;
    }
    getImgPath() {
        return this.img;
    }
}

let artists = [];
artists.push(new Artist("Alves", "assets/image/Artists/Alves.jpg"));
artists.push(new Artist("Walido", "assets/image/Artists/Walidone.jpg"));
artists.push(new Artist("Oh Chrisey", "assets/image/Artists/Oh Chrisey.jpg"));
artists.push(new Artist("Gs Salamandra", "assets/image/Artists/Gs Salamandra.jpg"));



console.log(artists);



// aggiungi gli artisti nelle sezioni
let topArtist_cont = document.querySelector('#arrayTop_artists');
let allArtists = document.querySelector('#Array_artists');

if (topArtist_cont) {
    for(let i = 0; i < 3; i++) { // aggiungi 3 nella sezione home top 3
        addArtist(artists[i], topArtist_cont);
    }
} else if (allArtists) {
    artists.forEach(element => {
        addArtist(element, allArtists);
    });
}


// funzione per aggiungere gli artisti
function addArtist(artist, obj) {
    const artistDiv = document.createElement('div')
    artistDiv.classList.add('artist');

    // card zoom
        const contImg = document.createElement('div');
        contImg.classList.add('cont_img');

    artistDiv.append(contImg);




    const img = document.createElement('img');
    img.src = artist.getImgPath();
    img.alt = artist.getName();

    const h3 = document.createElement('h3')
    h3.innerHTML = artist.getName();

    contImg.append(img);
    artistDiv.append(h3);

    obj.append(artistDiv);
 
}




