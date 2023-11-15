const { input } = require('@inquirer/prompts');
// //exemple de "if" à l'interieur d'un "if"
const heure =12;
if (typeof (heure) == 'number') {
    if (12 > heure) { console.log("C'est le matin"); }
else if (heure > 12) { console.log("C'est l'après midi");}
else if (heure==12){ console.log("Il est midi")};
}
else {
    console.log("ce n'est pas un chiffre");
};






// (async function addition() {
//     let nb3 = await input({ message: "Chiffres 1 : " });
//     let nb4 = await input({ message: "Chiffres 2 : " });
//     let resul = parseFloat(nb3) + parseFloat(nb4);
//     console.log(resul)


// })();




(async function imc() {
    console.log("Calcule ton IMC")
    let ques = await input({ message: 'Donne ton poids(kg) : ' });
    let ques2 = await input({ message: 'Donne ta taille(cm) : ' });
    ques2 /= 100;
    let result = ques / (ques2 * ques2);
    if (typeof (result) == typeof (2.2)) {
        if (result >= 40) { console.log('Tu es en obésité sévère') }
        else if (result >= 30) { console.log('Tu es légèrement obèse') }
        else if (result >= 25) { console.log('Tu es es en surpoids') }
        else if (result >= 18.5) { console.log('Tu es de corpulence normale') }
        else { console.log('Tu est trop maigre') };
        console.log(result);
    }
    else { console.log("Tu n'as pas donnés de chiffres") };

})();




function binai(number) {
    let result = (number).toString(16);
    console.log(result)
};

binai(161);
binai(128);
