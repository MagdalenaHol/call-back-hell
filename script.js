
// deployBomb();
//
// function deployBomb() {
//     printText('The bomb goes off in...');
//     setTimeout(three, 1000);
// }
//
// function three() {
//     printText('3...');
//     setTimeout(two, 1000);
// }
//
// function two() {
//     printText('2...');
//     setTimeout(one, 1000);
// }
//
// function one() {
//     printText('1...');
//     setTimeout(boom , 1000);
// }
//
// function boom() {
//     printText('Boom!');
//     console.log('The bomb exploded.')
// }


function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

function greeting(name) {
    alert('Hello ' + name);
}

processUserInput(greeting);

deployBomb();

function deployBomb() {
    bombStart()
        .then(three)
        .then(two)
        .then(one)
        .then(boom)
}

function bombStart(){
    printText('The bomb goes off in...');
    return Promise.resolve();
}

function three() {
    return promisePrintText('3...');
}

function two() {
    return promisePrintText('2...');
}

function one() {
    return promisePrintText('1...');
}

function boom () {
    return promisePrintText('Boom!', (msg) => {
        printText(msg);
        console.log('The bomb exploded.');
    });
}

function promisePrintText(msg, callbackFunction=printText) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callbackFunction(msg);
            resolve(msg);
        }, 1000);
    });
}


async function getUsers() {
        let response = await fetch('https://swapi.dev/api/people/1/')
        let data = await response.json()
        return data;
    }
getUsers().then(data=> console.log(data.name));

// fetch('https://swapi.dev/api/people/1/')
//     .then(response=> response.json())
//     .then(data=> console.log(data.name));
