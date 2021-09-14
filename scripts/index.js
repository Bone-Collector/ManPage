document.addEventListener('DOMContentLoaded', () => {
    var letterTyped = [];
    document.addEventListener("keydown", (event) => {
    letterTyped.push(event.key);
    console.log(letterTyped + " " + letterTyped.length);
    window.localStorage.setItem('words', JSON.stringify(letterTyped));
    });
});
document.addEventListener("click", (event) => {
    var words = [];
    console.log(JSON.parse(window.localStorage.getItem('words')));
    words = JSON.parse(window.localStorage.getItem('words'));
    document.getElementById("para").innerHTML = JSON.stringify(words);
    window.localStorage.removeItem('words');
});


