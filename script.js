let voltasGanhasPedro = 0;
let voltasGanhasEdna = 0;
let voltasGanhasJuca = 0;

function run(voltas) {
    let numeroVoltas = voltas;
    for (let i = 0; i < numeroVoltas; i++) {
        let velPedro = Math.round(Math.random() * (230 - 150) + 150);
        let velJuca = Math.round(Math.random() * (260 - 120) + 120);
        let velEdna = Math.round(Math.random() * (220 - 180) + 180);
        let velocidadeFinalPedro = Math.round(velPedro - (0.03 * velPedro));
        let velocidadeFinalJuca = Math.round(velJuca - (0.05 * velJuca));
        let velocidadeFinalEdna = Math.round(velEdna - (0.01 * velEdna));
        if (velocidadeFinalPedro > velocidadeFinalJuca && velocidadeFinalPedro > velocidadeFinalEdna) {
            voltasGanhasPedro++
        } else if (velocidadeFinalEdna > velocidadeFinalJuca) {
            voltasGanhasEdna++
        } else {
            voltasGanhasJuca++
        }
    }
    if (voltasGanhasPedro > voltasGanhasEdna && voltasGanhasPedro > voltasGanhasJuca) {
        console.log("Pedro é o vencedor " + voltasGanhasPedro);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Pedro é o vencedor! ${voltasGanhasPedro} voltas</p>
        <button onclick="reset()">Reset</button>
        `;
    } else if (voltasGanhasEdna > voltasGanhasJuca) {
        console.log("Edna é a vencedora" + voltasGanhasEdna);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Edna é a vencedora! ${voltasGanhasEdna} voltas </p>
        <button onclick="reset()">Reset</button>
        `

    } else {
        console.log("Juca é o vencedor" + voltasGanhasJuca);
        document.getElementById("options_and_result").innerHTML = " ";
        document.getElementById("options_and_result").innerHTML = `
        <p id="text">Resultado</p>
        <p>Juca é o vencedor! ${voltasGanhasJuca} voltas</p>
        <button onclick="reset()">Reset</button>
        `
    }
}

function reset() {
    voltasGanhasPedro = 0;
    voltasGanhasEdna = 0;
    voltasGanhasJuca = 0;
    document.getElementById("options_and_result").innerHTML = " ";
    document.getElementById("options_and_result").innerHTML = `
    <p id="text">Qual tipo de corrida você quer ?</p>
    <button onclick="run(10)">Corrida rápida: 10 voltas</button>
    <button onclick="run(70)">Grande Prêmio: 70 voltas</button>
    <button onclick="run(160)">Enduro: 160 voltas</button>
    `
}