const imageGallery = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector(".container");


for (let i = 0; i < imageGallery.length; i++) {
    const imageLink = imageGallery[i].image;

    // Create a wrapper div
    const wrapper = document.createElement("div");
    container.appendChild(wrapper);

    // Create and append the image element
    const imgElement = document.createElement("img");
    imgElement.src = imageLink;
    wrapper.appendChild(imgElement);

    // Create and append the title element
    const imageTitle = imageGallery[i].title;
    const titleElement = document.createElement("h2");
    titleElement.innerHTML = imageTitle;
    wrapper.appendChild(titleElement);

    // Create and append the text element
    const imageText = imageGallery[i].text;
    const textElement = document.createElement("p");
    textElement.innerHTML = imageText;
    wrapper.appendChild(textElement);

    // Add the 'inAction' class to the div wrapper
    if (i == 0) {
        wrapper.classList.add("inAction");
    }
}

const wrapperElements = container.querySelectorAll(".container > div");

let activeImage = 0;

wrapperElements[activeImage].classList.add("inAction");

const btnUpElement = document.querySelector(".btnUp");



// created a function with 3 second time internal
function slideShow(){
    
    wrapperElements[activeImage].classList.remove("inAction");
    
    
    //go forwards
    if (activeImage < wrapperElements.length - 1) {
        activeImage++;
    } else {
        activeImage = 0;
    }
    
    wrapperElements[activeImage].classList.add("inAction");
}
const timeShow = setInterval (slideShow, 3000); // calling the function of interval

//creating a button function with slideshow as well
btnUpElement.addEventListener("click", function () {
    slideShow();
});


//creating 
const clearShow = clearInterval
const btnStop = document.querySelector(".stop");
btnStop.addEventListener("click", function(){
    
     clearInterval(timeShow);
})



// normal button function iwth going backwards on click
const btnDownElement = document.querySelector(".btnDown");

btnDownElement.addEventListener("click", function () {
    wrapperElements[activeImage].classList.remove("inAction");


    // go backwards
    if (activeImage > 0) {
        activeImage--;
    } else {
        activeImage = wrapperElements.length - 1;
    }

    wrapperElements[activeImage].classList.add("inAction");
});
