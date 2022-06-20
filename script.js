const btnTenLaps = document.querySelector(".btn-ten-laps");
const btnSeventyLaps = document.querySelector(".btn-seventy-laps");
const btnOneHundredSixtyLaps = document.querySelector(
  ".btn-one-hundred-sixty-laps"
);

let numberOfLapsWonByPedro = 0;
let numberOfLapsWonByEdna = 0;
let numberOfLapsWonByJuca = 0;

const minVelocityOfJucaCar = 120;
const maxVelocityOfJucaCar = 260;
const skidPercentualOfJucaCar = 0.05;

const minVelocityOfEdnaCar = 180;
const maxVelocityOfEdnaCar = 220;
const skidPercentualOfEdnaCar = 0.01;

const minVelocityOfPedroCar = 150;
const maxVelocityOfPedroCar = 230;
const skidPercentualOfPedroCar = 0.03;

function velocityCar(maxVelocity, minVelocity) {
  return Math.random() * (maxVelocity - minVelocity) + minVelocity;
}

function race(laps) {
  for (let counter = 0; counter < laps; counter++) {
    const randomVelocityBasedOnPedroCar = velocityCar(
      maxVelocityOfPedroCar,
      minVelocityOfPedroCar
    );
    const randomVelocityBasedOnJucaCar = velocityCar(
      maxVelocityOfJucaCar,
      minVelocityOfJucaCar
    );
    const randomVelocityBasedOnEdnaCar = velocityCar(
      maxVelocityOfEdnaCar,
      minVelocityOfEdnaCar
    );

    const roundedVelocityOfPedroCar = Math.round(randomVelocityBasedOnPedroCar);
    const roundedVelocityOfJucaCar = Math.round(randomVelocityBasedOnJucaCar);
    const roundedVelocityOfEdnaCar = Math.round(randomVelocityBasedOnEdnaCar);

    const finalVelocityPedroCar = Math.round(
      roundedVelocityOfPedroCar -
        roundedVelocityOfPedroCar * skidPercentualOfPedroCar
    );
    const finalVelocityJucaCar = Math.round(
      roundedVelocityOfJucaCar -
        roundedVelocityOfJucaCar * skidPercentualOfJucaCar
    );
    const finalVelocityEdnaCar = Math.round(
      roundedVelocityOfEdnaCar -
        roundedVelocityOfEdnaCar * skidPercentualOfEdnaCar
    );

    const pedroWonTheLap =
      finalVelocityPedroCar > finalVelocityJucaCar &&
      finalVelocityPedroCar > finalVelocityEdnaCar;
    const ednaWonTheLap =
      finalVelocityEdnaCar > finalVelocityJucaCar &&
      finalVelocityEdnaCar > finalVelocityPedroCar;
    if (
      finalVelocityEdnaCar !== finalVelocityJucaCar &&
      finalVelocityJucaCar !== finalVelocityPedroCar
    ) {
      if (pedroWonTheLap) {
        numberOfLapsWonByPedro++;
      } else if (ednaWonTheLap) {
        numberOfLapsWonByEdna++;
      } else {
        numberOfLapsWonByJuca++;
      }
    }
  }
  if (
    numberOfLapsWonByPedro > numberOfLapsWonByEdna &&
    numberOfLapsWonByPedro > numberOfLapsWonByJuca
  ) {
    console.log("Pedro é o vencedor " + numberOfLapsWonByPedro);
    console.log(numberOfLapsWonByJuca);
    console.log(numberOfLapsWonByEdna);
    console.log(numberOfLapsWonByPedro);
    document.getElementById("options_and_result").innerHTML = " ";
    document.getElementById("options_and_result").innerHTML = `
    <p id="text">Resultado</p>
    <p>Pedro é o vencedor! ${numberOfLapsWonByPedro} voltas</p>
    <button onclick="location.reload()">Reload</button>
    `;
  } else if (numberOfLapsWonByEdna > numberOfLapsWonByJuca) {
    console.log("Edna é a vencedora" + numberOfLapsWonByEdna);
    console.log(numberOfLapsWonByJuca);
    console.log(numberOfLapsWonByEdna);
    console.log(numberOfLapsWonByPedro);
    document.getElementById("options_and_result").innerHTML = " ";
    document.getElementById("options_and_result").innerHTML = `
    <p id="text">Resultado</p>
    <p>Edna é a vencedora! ${numberOfLapsWonByEdna} voltas </p>
    <button onclick="location.reload()">Reload</button>
    `;
  } else {
    console.log("Juca é o vencedor" + numberOfLapsWonByJuca);
    console.log(numberOfLapsWonByJuca);
    console.log(numberOfLapsWonByEdna);
    console.log(numberOfLapsWonByPedro);
    document.getElementById("options_and_result").innerHTML = " ";
    document.getElementById("options_and_result").innerHTML = `
    <p id="text">Resultado</p>
    <p>Juca é o vencedor! ${numberOfLapsWonByJuca} voltas</p>
    <button onclick="location.reload()">Reload</button>
    `;
  }
}

btnTenLaps.addEventListener("click", () => {
  race(10);
});
btnSeventyLaps.addEventListener("click", () => {
  race(70);
});
btnOneHundredSixtyLaps.addEventListener("click", () => {
  race(160);
});
