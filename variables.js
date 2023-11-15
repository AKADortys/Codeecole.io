const messages = 'hello la team';
console.log(typeof messages);
const nbrs = 12;
console.log(typeof nbrs);
const vf = true;
console.log(typeof vf);

const prenom = 'Thibault';
const prenom2 = prenom;
console.log(prenom2);
console.log(prenom2[1]);

let nbr1 = 10;
let nbr2 = 15;

[nbr1, nbr2] = [nbr2, nbr1];
console.log(nbr1);
console.log(nbr2);

let nb = 10; //nb3
let nb1 = 15; //nb2
let nb2 = 26; //nb
let nb3 = 38; //nb1

let temp = nb;
nb = nb3;
nb3 = nb1;
nb1 = nb2;
nb2 = temp;
console.log(nb, nb1, nb2, nb3);
