const { input, select } = require('@inquirer/prompts');


// (async function() {
//     const response = await input({ message: 'Indiquez un nombre entier' });
//     const responseCasted = parseInt(response, 10);
//     if (isNaN(responseCasted)) {
//         console.log('Cette valeur n\'est pas un nombre');
//         return;
//     }

//     if(responseCasted % 5 === 0){
//         console.log('Nombre divisible par 5')   
//     } else {
//         console.log('Nombre non divisible par 5')   
//     }


// })()


// (async function() {
//     // Quelle est votre taille
//     // Quelle est votre poids

//     // reponse votre IMC est :


//     let taille = await input({ message: 'Indiquez votre taille en cm' });
//     const poids = await input({ message: 'Indiquez votre poids' });
//     taille /= 100;

//     const imc = poids/(taille*taille)

//     console.log(`Votre IMC est : ${imc}`);


// })()
//indiquez un nombre
//indiquez un nombre
//indiquez un nombre
// afficher les nombres du plus petit au plus grands

// (async function () {
//     const s1 = await input({ message: 'premier cotés' });
//     const s2 = await input({ message: 'second cotés' });
//     const s3 = await input({ message: 'troisieme cotés' });

//     if (s1 == s2 && s1 == s3) (console.log('triangle equilatéral'))
//    else if(s1 == s2 || s1 == s3 || s2 == s3)
//     console.log('Isocèle')
//     else{ console.log('scalene')
// // }})()

// nbr 1
// nbr 2
// opérateur
// retourner resultat
// (async function () {
//     const nb1 = await input({ message: 'premier chiffre' });
//     const nb2 = await input({ message: 'second chiffre' });
//     const result = parseFloat(nb1) + parseFloat(nb2);
//     console.log(result)
// })();
(async function addition() {
    let nb3 = await input({ message: "Chiffres 1 : " });
    let nb4 = await input({ message: "Chiffres 2 : " });
    let resul = parseFloat(nb3) + parseFloat(nb4);
    console.log(resul)


}) ();


