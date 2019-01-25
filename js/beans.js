let beansObject = [];

let steps = [[30, 26], [30, 50], [195, 50], [610, 50]];

//first row
for (let index = 30; index < 760; index += 25) {
  beansObject.push({
    x: index,
    y: 26,
    eat: false
  });
}

//second row - first section
for (let index = 30; index < 100; index += 25) {
  beansObject.push({
    x: index,
    y: 50,
    eat: false
  });
}

//second row - second section
for (let index = 195; index < 510; index += 25) {
  beansObject.push({
    x: index,
    y: 50,
    eat: false
  });
}

//second row - third section
for (let index = 610; index < 760; index += 25) {
  beansObject.push({
    x: index,
    y: 50,
    eat: false
  });
}

//Third row for 30
for (let index = 30; index < 100; index += 25) {
  beansObject.push({
    x: index,
    y: 74,
    eat: false
  });
}

//third row - second section
for (let index = 195; index < 220; index += 25) {
  beansObject.push({
    x: index,
    y: 74,
    eat: false
  });
}

//third row - third section
for (let index = 345; index < 350; index += 25) {
  beansObject.push({
    x: index,
    y: 74,
    eat: false
  });
}

//third row - fourth section
for (let index = 495; index < 500; index += 25) {
  beansObject.push({
    x: index,
    y: 74,
    eat: false
  });
}

//third row - fourth section
for (let index = 610; index <= 620; index += 25) {
  beansObject.push({
    x: index,
    y: 74,
    eat: false
  });
}

//fourth row
for (let index = 30; index < 100; index += 25) {
  beansObject.push({
    x: index,
    y: 98,
    eat: false
  });
}

//fourth row - second section
for (let index = 195; index < 220; index += 25) {
  beansObject.push({
    x: index,
    y: 98,
    eat: false
  });
}

//fourth row - third section
for (let index = 345; index < 350; index += 25) {
  beansObject.push({
    x: index,
    y: 98,
    eat: false
  });
}

//fourth row - fourth section
for (let index = 495; index < 500; index += 25) {
  beansObject.push({
    x: index,
    y: 98,
    eat: false
  });
}

//fourth row - fifth section
for (let index = 610; index <= 620; index += 25) {
  beansObject.push({
    x: index,
    y: 98,
    eat: false
  });
}

//fifth row
for (let index = 30; index < 100; index += 25) {
  beansObject.push({
    x: index,
    y: 146,
    eat: false
  });
}

//fifth row - second section
for (let index = 195; index < 220; index += 25) {
  beansObject.push({
    x: index,
    y: 146,
    eat: false
  });
}

//fifth row - third section
for (let index = 345; index < 350; index += 25) {
  beansObject.push({
    x: index,
    y: 146,
    eat: false
  });
}

//fifth row - fourth section
for (let index = 495; index < 500; index += 25) {
  beansObject.push({
    x: index,
    y: 146,
    eat: false
  });
}

//fifth row - six section
for (let index = 685; index < 700; index += 25) {
  beansObject.push({
    x: index,
    y: 146,
    eat: false
  });
}

//six row
for (let index = 30; index < 100; index += 25) {
  beansObject.push({
    x: index,
    y: 170,
    eat: false
  });
}

//six row - second section
for (let index = 195; index < 220; index += 25) {
  beansObject.push({
    x: index,
    y: 170,
    eat: false
  });
}

//six row - third section
for (let index = 345; index < 350; index += 25) {
  beansObject.push({
    x: index,
    y: 170,
    eat: false
  });
}

//six row - fourth section
for (let index = 495; index < 500; index += 25) {
  beansObject.push({
    x: index,
    y: 170,
    eat: false
  });
}

//six row - six section
for (let index = 685; index < 700; index += 25) {
  beansObject.push({
    x: index,
    y: 170,
    eat: false
  });
}

//seven row
for (let index = 30; index < 760; index += 25) {
  beansObject.push({
    x: index,
    y: 194,
    eat: false
  });
}

//eight row
for (let index = 30; index < 760; index += 25) {
  beansObject.push({
    x: index,
    y: 218,
    eat: false
  });
}

function getBeans() {
  return beansObject;
}
