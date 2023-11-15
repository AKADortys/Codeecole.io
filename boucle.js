for (let i = 1; i <= 10; i++) {
    console.log(`hello world ${i}`)
}

// exercice 2 afficher les nombres suivant à l'écran: 2 4 6 8 10 12
for (let i = 2; i <= 12; i += 2) {
    console.log(`nombres: ${i}`)
}
//exercice 3
//affiche la table de mutliplication de 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`)
}
//exercice 4, afficher les nombre de 1 a 20 sur les nombres divisible par 3 rajouté un message 'ce nombres et divisible par 3'
for (let i = 1; i <= 20; i++) {
    console.log(i)
    if (i % 3 == 0) { console.log('ce nombre est divisible par trois') }
}
//exercice 5
let fruit = ['pomme', 'poire', 'kiwi', 'orange', 'cerise'];
fruit.push('melon');
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}