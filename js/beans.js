let beansObject = [];

let steps = [
    [30,26],
    [30,50],
    [195,50],
    [610,50]
];


//first row 
for(let index=30 ; index < 760 ; index += 25 ){
    beansObject.push({
        x:index,
        y:26,
        eat: false
    });

}

//second row - first section
for(let index=30;index<100;index+=25){
    beansObject.push({
        x:index,
        y:50,
        eat: false
    });
}

//second row - second section
for(let index=195 ; index < 510 ; index+=25){
    beansObject.push({
        x:index,
        y:50,
        eat: false
    });
}

//second row - third section
for(let index=610 ; index < 760 ; index+=25){
        beansObject.push({
            x:index,
            y:50,
            eat: false
        });
}

//Third row for 30
for(let index=30;index<100;index+=25){
    beansObject.push({
        x:index,
        y:74,
        eat: false
    });
}

//fourth row
for(let index=30;index<100;index+=25){
    beansObject.push({
        x:index,
        y:98,
        eat: false
    });
}

//fifth row
for(let index=30;index<100;index+=25){
    beansObject.push({
        x:index,
        y:146,
        eat: false
    });
}

//six row
for(let index=30;index<100;index+=25){
    beansObject.push({
        x:index,
        y:170,
        eat: false
    });
}

//seven row
for(let index=30;index<760;index+=25){
    beansObject.push({
        x:index,
        y:194,
        eat: false
    });
}

//eight row
for(let index=30;index<760;index+=25){
    beansObject.push({
        x:index,
        y:218,
        eat: false
    });
}




function getBeans(){
    return beansObject;
}