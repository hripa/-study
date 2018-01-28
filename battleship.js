//игра Морской бой
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready,aim,fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell nember!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT");
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS");
        }
    }
}

var stats = "You took " + guesses + "guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);




//выбор одежды по температуре
function whatShalliWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }

}

whatShalliWear(50);
whatShalliWear(80);
whatShalliWear(60);


//вычисление возраста собаки
function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + " years old");
}
var myDog = "Fudo";
dogYears(myDog, 4);

function dolt(param) {
    param = 2;
}
var test = 1;
dolt(test);
console.log(test);



//случайные фразы
function makePhreses() {
    var words1 = ['привет', 'кто ты?', 'уйди', 'Вася'];
    var words2 = ['выходи', 'привет мир', 'скажи', 'конец'];
    var words3 = ['досвидания', 'курва?', 'птица', 'кино'];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + '  ' + words2[rand2] + ' ' + words3[rand3];
    alert(phrase);
}
makePhreses();

// переборка массива и вывод результатов
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

var output;
var length;
var i = 0;
var max;

while (i < scores.length) {
    output = "Bubbles solution #" + i + " score: " + scores[i];
    console.log(output);
    i += 1;
}

length = scores.length;
console.log("Bubbles tests: " + length);
max = Math.max(60, 50);
console.log("Highest bubbles ;" + max);



//ищим среди мороженого жвачку (цыкл while)

var products = ["Choo Cgoo Chocolate", "Ice Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];
var i = 0;

while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
    i++;
}


//ищим среди мороженого жвачку (цыкл for)

var products = ["Choo Cgoo Chocolate", "Ice Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];



for (var i = 0; i < hasBubbleGum.length; i++) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
}



var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

var output;
var highScore = 0;


for (var i = 0; i < scores.length; i++) {
    output = "Bubbles solution #" + i + " score: " + scores[i];
    console.log(output);

    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

//создаём пустой массив в который будем передавать максимальное значение
var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);


    }

}
console.log("Solutions with the highest score: " + bestSolutions);




//Рефакторинг кода

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44
];


function printAndGetHighScore(scores) {
    var output;
    var highScore = 0;

    for (var i = 0; i < scores.length; i++) {
        output = "Bubbles solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}


function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .22, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

function getMostEffectiveSolutoin(scores, costs, highScore) {
    var cost = 100;
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore && cost > costs[i]) {

            index = i;
            cost = costs[i];
        }
    }

    return index;
}


var highScore = printAndGetHighScore(scores);
console.log("Bebbles tests " + scores.length);
console.log("Highest bubble score: " + highScore);
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
var mostCostEffective = getMostEffectiveSolutoin(scores, costs, highScore);
console.log("Bubble Solution # " + mostCostEffective + " is the most cost effective");

//ОБЬЕКТЫ
var cadi = {
    make: "Cadillac",
    year: 1955,
    color: "tan",
    model: "GM",
    passengers: 5,
    convertible: false,
    mileage: 12892

};
cadi.mileage = 10000;
cadi.gaz = false;

console.log(cadi);

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    Breeed: "mixed",
    activiti: "fetch balls"

};

var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = name + " seys " + barc + " when he wants to " + activiti;
console.log(speak);



//.................
function getSecret(file, secretPassword) {
    superSecretFile.opened = superSecretFile.opened + 1;
    if (secretPassword == superSecretFile.password) {
        return superSecretFile.contents;
    } else {
        return "Invalid password! No secret for you";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == superSecretFile.password) {
        superSecretFile.opened = 0;
        superSecretFile.contents = secret;

    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evels next meeting is in Detroit."
};

var secret = getSecret(superSecretFile.opened, superSecretFile.password);
console.log(secret);

setSecret(superSecretFile.opened, superSecretFile.password, "Dr. Evels next meeting is in Detroit");
secret = getSecret(superSecretFile.opened, superSecretFile.password);


//ГЕНИРАТОР МАШИН
function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertable = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertable: convertable[rand6],
        mileage: 0
    };
    return car;
}

function displeyCar(car) {
    console.log("You new car is a " + car.year  + " " + car.make  + " " + car.model);
}

var carToSell = makeCar();
displeyCar(carToSell);

//МЕТОДЫ...............................................
var Fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertable: false,
    mileage: 88000,
    started: false,

    start: function() {
        started = true;
    },

    stop:function(){
        started = false;
    },

    drive: function() {
        if (started) {
            alert("Zoom Zoom");
        }
        else {
            alert("You need to stert the engine rirst.");
        }
    }
};

 Fiat.drive();
 Fiat.stop();
