
console.log('-------------6------------')
let krepselis = [];

let p1 = {
    pavadinimas: "Pienas",
    kaina: 1.25
}
let p2 = {
    pavadinimas: "Kefyras",
    kaina: 1.99
}
let p3 = {
    pavadinimas: "Sviestas",
    kaina: 2.25
}
krepselis.push(p1, p2, p3);
krepselis.push(
    { pavadinimas: "Kiausiniai", kaina: 1.99 },
    { pavadinimas: "Miltai", kaina: 2.00 }
);
function printPreke(preke) {
    console.log(preke.pavadinimas + "-" + preke.kaina);
}
printPreke({ pavadinimas: "Pienas", kaina: 1.25 });
console.log('-------------6,1---------------')

function printKrepselis(krepselis) {
    for (let preke of krepselis) {
        console.log(preke.pavadinimas + " : " + preke.kaina + " Eur")
    }
}
printKrepselis(krepselis);

// console.log('-------------ARBA---------------')

// // function printKrepselis1(arr) {
// //     arr.forEach(element => printPreke(element));
// // }


console.log('-------------6,2---------------')
let kiekis = 0;
for (let i = 0; i < krepselis.length; i++) {
    kiekis++
}
console.log('Prekių kiekis:' + kiekis);

console.log('-------------ARBA---------------')
function getPrekiuKiekis(arr) {
    return arr.length;
}
console.log('Prekių kiekis:' + getPrekiuKiekis(krepselis));

console.log('-------------6,3---------------')

function getKrepselisSuma(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma = suma + arr[i].kaina;
    }
    return suma
}

console.log("Krepšelio suma: " + getKrepselisSuma(krepselis).toFixed(2) + "Eur");

console.log('-------------6,4 ---------------')
function getDidziausiaKaina(arr) {
    let max = arr[0].kaina;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].kaina > max) {
            max = arr[i].kaina;
        }
    }
    return max;
}
console.log("Didžiausia kaina: " + getDidziausiaKaina(krepselis));

console.log('-------------6,5 ---------------')
function getMaziausiaKaina(arr) {
    let min = arr[0].kaina;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].kaina < min) {
            min = arr[i].kaina;
        }
    }
    return min;
}
console.log("Mažiausia kaina: " + getMaziausiaKaina(krepselis));

console.log('-------------6,5****---------------')

function getDidziausiaKainaPreke(arr) {
    let max = arr[0].kaina;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].kaina > max) {
            max = arr[i].kaina;
            index = i;
        }
    }
    return index;
}
let didVieta = getDidziausiaKainaPreke(krepselis);
console.log("Brangiausia prekė yra: ");
printPreke(krepselis[didVieta]);

console.log('-------------6,5****---------------')

function getKainuVidurkis(arr) {
    return getKrepselisSuma(arr) / getPrekiuKiekis(arr);
}
console.log("Kainų vidurkis: " + getKainuVidurkis(krepselis).toFixed(2));