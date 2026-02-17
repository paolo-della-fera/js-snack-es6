// Snack 1

// mi prendo l'elemento del DOM da modificare 
const racingBike = document.getElementById('bike_ligth')

// mi creo l'array di oggetti delle bici 
const bike = [
    {
        nome: 'Specialized',
        peso: 7,
    },
    {
        nome: 'Treck',
        peso: 6,
    },
    {
        nome: 'Cannodale',
        peso: 8,
    },
    {
        nome: 'Pinarello',
        peso: 10,
    },
    {
        nome: 'Bianchi',
        peso: 7,
    },
]
console.log(bike);


// prendiamo la prima bici come riferimento iniziale
let bikeLigth = bike[0]


// creo il ciclo for per confrontare il peso di tutte le bici e vedere qual è la più pesante 
for (let i = 1; i < bike.length; i++) {
    // SE c'è una bici più leggera 
    if (bike[i].peso < bikeLigth.peso) {
        // aggiorno l'array 
        bikeLigth = bike[i];
    }
}
console.log("La bici più leggera è:", bikeLigth.nome, "con peso:", bikeLigth.peso);


// stampo in pagina il risultato
racingBike.innerText = `La bici più leggera è: ${bikeLigth.nome} con peso: ${bikeLigth.peso} kg`;
