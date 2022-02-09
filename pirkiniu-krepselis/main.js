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