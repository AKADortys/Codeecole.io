// tableau vide
const t1 = [];
const t2 = Array();
// tableau avec valeur
const t3 = ['pomme', 'poire', 'orange'];
const t4 = Array('pomme', 'poire', 'orange');
// pousser des infos dans un tableau
t3.push('melon');
//recuperer les infos depuis le tableau
console.log(t3);
console.log(t3.length);
console.log(t3[0]);
console.log(t3[1]);
console.log(t3[2]);
console.log(t3[3]);
//supprimer des elements
// t3.splice(0,t3.lenght);
// t3.length = 2;
//modifier une valeur dans un tableau
t3[0] = 'cerise';

// cerise dois se retrouver à la position 3 du tableau et poire à la position 4, orange à la position 1, orange position 2
const tab = ['cerise', 'poire', 'orange', 'pomme']
console.log(tab)
let tempo = tab[2]

tab[2] = tab[0];
tab[0] = tempo;
tempo = tab[1];
tab[1] = tab[3];
tab[3] = tempo;


console.log(tab)


