/*
### MY VERSION ###
// STEP 1: Create the rgb value
const r = Math.floor(Math.random() * 255);  // Get R
const g = Math.floor(Math.random() * 255);  // Get G
const b = Math.floor(Math.random() * 255);  // Get B

const rgb = `rgb(${r}, ${g}, ${b})`  // Get the rgb

// STEP 2: Give the rbg value to the h1
const h1 = document.querySelector('h1');
h1.innerText = rgb;

// STEP 3: Give the rgb value to the background-color
const body = document.querySelector('body');
body.style.backgroundColor = rgb;

// STEP 4: Make the button refresh the page
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    window.location.reload();
})
*/

// ### COLT STEELE'S VERSION ###

const makeRandInt = () => {
    // STEP 1: Create the rgb value
    const r = Math.floor(Math.random() * 255);  // Get R
    const g = Math.floor(Math.random() * 255);  // Get G
    const b = Math.floor(Math.random() * 255);  // Get B

    return `rgb(${r}, ${g}, ${b})`  // Get the rgb
}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {

    // Use the rgb value
    const rgb = makeRandInt();
    // STEP 2: Give the rgb value to the background-color
    document.body.style.backgroundColor = rgb;

    // STEP 2: Give the rbg value to the h1
    const h1 = document.querySelector('h1');
    h1.innerText = rgb;
})
