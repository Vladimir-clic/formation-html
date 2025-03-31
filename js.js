const button = document.getElementById('changeTextButton');
const introText = document.getElementById('intro');

const nombre = document.getElementById('nombre')
let n = 1
button.addEventListener('click', function() {
    introText.textContent = 'tu as attrapé une mouche !';
    nombre.textContent = 'Nombre de click : ' + n + ' !'
    let autreNombre = n * 5 /8
    let testNombre = 6
    n ++
    Autre.textContent = "voilà, le nombre de click multiplié par 5 et divisé par 8 : " + autreNombre + " et juste au cas ou, je te rappelle quel chiffre se trouve entre 5 et 7 : " + testNombre;

});



