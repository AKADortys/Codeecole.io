const message1 = "hello";
const message2 = "world";
console.log(message1 + ' ' + message2);

const message3 = 'hello';
const message4 = 'world';
let pharse = message3.concat(' ').concat(message4)
console.log(pharse)

const message5 = 'hello';
const message6 = 'world';
let pharse2 = `${message5} ${message6}`
console.log(pharse2);
console.log(`${message5} ${message6}`);

const prenom = 'thibault';
const nom = 'ancel';
console.log(`bonjour, ${prenom} ${nom}`);

const a = "5";
const b = 3;
const texte = "2";
console.log(`${a} ${b} ${texte}`)

console.log(`bonjour, je m'appelle ${prenom} et mon nom est ${nom}`)
const rue = 'avenue des comtes, 58'
const ville = 'Mouscron'
const codePostal = '7700'
const pays = 'Belgique'
console.log(`${prenom} ${nom}\n${rue} ${ville} ${codePostal}\n ${pays}`);
const animaux = ['chien', 'chat', 'poisson']
console.log (`à la maison j'ai un ${animaux[0]}`)
