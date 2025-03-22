function myNumber(value) {
  let linha = "";
  for (let i = 1; i <= value; i++) {
    linha = linha + " " + value;
  }
  for (let i = 1; i <= value; i++) {
    console.log(`${linha}`);
  }
}

function myNumber2(value) {
  for (let i = 1; i <= value; i++) {
    let linha = "";

    for (let j = 1; j <= value; j++) {
      linha = linha + " " + value;
    }

    console.log(`${linha}`);
  }
}

myNumber(4);
myNumber2(4);
