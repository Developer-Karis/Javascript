// 1
// let nb = prompt("Entrez une valeur : ");
// while (nb.length == 0) {
//     nb = prompt("Vous devez entrez une valeur : ").trim();
// }
// console.log(nb.length);

// 2
// let nb2 = prompt("Entrez une valeur : ");
// while (nb1 < 10) {
//     nb2 = prompt("Entrez une nouvelle valeur : ");
// }

// 3
// let nb3 = prompt("Combien de tours ?");
// let compteurWhile = 0;
// while (compteurWhile < nb3) {
//     compteurWhile++;
// }
// console.log(compteurWhile);

// 4
// let start = 3;
// let fin = 6;
// while (start <= fin) {
//     console.log(start);
//     start++;
// }

// 5
let nb = -300;
while (nb < 0) {
    nb = nb - nb;
    console.log(nb);
}