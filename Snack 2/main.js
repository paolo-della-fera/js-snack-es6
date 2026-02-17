// mi creo un array di oggetti contenenti le squadre di calcio
const footballTeam = [
    {
        nome: 'Juventus',
        punti: '',
        falli: '',
    },
    {
        nome: 'Fiorentina',
        punti: '',
        falli: '',
    },
    {
        nome: 'Milan',
        punti: '',
        falli: '',
    },
    {
        nome: 'Roma',
        punti: '',
        falli: '',
    },
    {
        nome: 'USD Pescopagano 1926',
        punti: '',
        falli: '',
    },
]

// genero automaticamente i punti fatti dalle squadre 
// creo il ciclo for per generare i punti in modo automatico per tutte le squadre 
for (let i = 0; i < footballTeam.length; i++) {

    // genero un numero casuale da 0 a 100
    const randomPoint = Math.floor(Math.random() * 101);

    // scrivi i punti generati all'interno della proprietà
    footballTeam[i]['punti'] = randomPoint
}


// creo il ciclo for per generare il numero di falli subiti in modo automatico per ogni squadra 
for (let i = 0; i < footballTeam.length; i++) {

    // genero un numero casuale da 0 a 30
    const fouls = Math.floor(Math.random() * 31);

    // scrivo i falli subiti all'interno della proprietà
    footballTeam[i]['falli'] = fouls
}
console.log(footballTeam);


// creo il nuovo array 
const teamFootball = []

// creo il ciclo for per creare il nuovo array con solo il nome delle squadre e i falli subiti 
for (let i = 0; i < footballTeam.length; i++) {
    teamFootball.push({
        nome: footballTeam[i].nome,
        falli: footballTeam[i].falli
    });
}
        
// stampo tutto in console 
console.log(teamFootball);
