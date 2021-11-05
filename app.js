const doggie = document.getElementById ('dogPic'); 
const dog = document.getElementById ('dogSound');
const tagDog = document.getElementById ('DOG');
// dog section 
console.log(doggie);
console.log(dog);
console.log(tagDog);

const kitty = document.getElementById ('catPic');
const Cat = document.getElementById ('catSound');
const tagCat = document.getElementById ('CAT');
// cat section
console.log(kitty);
console.log(Cat);
console.log(tagCat);
const horsey = document.getElementById ('horsePic');
const horse = document.getElementById ('horseSound');
const tagHorse = document.getElementById ('HORSE');
// horse section
console.log(horsey);
console.log(horse);
console.log(tagHorse);

doggie.addEventListener('click', () =>{
    dog.play();
    tagDog.textContent = 'DOG';
});

kitty.addEventListener('click', () =>{
    Cat.play();
    tagCat.textContent = 'CAT';
});

horsey.addEventListener('click', () =>{

    horse.play();
    tagHorse.textContent = 'HORSE';
});