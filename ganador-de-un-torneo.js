
//Exercise: tournament winner

const competitions = [
    ['JavaScript', 'C#'],   //javaScript es el equipo local, C# el equipo visitante
    ['C#', 'Python'],       // C# vs Python
    ['Python', 'JavaScript']
]
// 1: gana equipo local, 0: gana equipo visitante (CUIDADO, no se refiere a la posición 0 o 1, está invertido)
const results = [0, 0, 1]; //la competición la ganó C#, Python y Python

function tournamentWinner (competitions, results){
    const scores = {};
    let winner = '';
    
    for (let i= 0; i < competitions.length; i++) {
        //le indicamos que la posición 0 serán siempre home, y la 1 away
        //const home = competitions[i][0];
        //const away = competitions[i][1];
        // podemos escribir lo anterior en una sola línea:
        const [home, away] = competitions[i];
        const winningTeam  = results[i] === 0 ? away : home;

        /*
        winnigTeam = JavaScript (por ejemplo)
        scores = {} (tenemos esta matriz)
        Queremos almacenar por cada equipo, el valor de sus puntos
        scores = {
            JavaScript
        }
        */
        scores[winningTeam] =(scores[winningTeam] || 0) + 3; // si no está, añadirle 0, si está sumar 3
        
        if (!winner || scores[winningTeam]> scores[winner]) {
            winner = winningTeam
        }
    }
    return winner
}

console.log(tournamentWinner (competitions, results));