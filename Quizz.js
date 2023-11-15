const { input} = require('@inquirer/prompts');
var colors = require('colors');


(async function () {

    console.log('Bienvenue dans le "Le quizz" !\n'.underline.red.bold)
    const nomJoueur = await input({ message: 'Quel est votre nom ?\n'.yellow });
    let scrore = 0;
    let quesTab =
        [
            {ques:"En quelle année nous avons poser le pied sur la lune ?",rep:'1969'},//1
            {ques:"Combien font : (10+10)x10 ?",rep:'200'},//2
            {ques:"Complétez l'expression : 'Mettre du beurre dans les...'",rep:'EPINARD'},//3
            {ques:"Quelle est la bonne combinaison de couleur pour le drapeau Belge ?",rep:'NOIR JAUNE ROUGE'},//4
            {ques:"Comment appel-t-on une variable qui n'a pas de valeur ?",rep:'UNDEFINED'},//5
            {ques:"Quand a-t-on découvert le continent Américain ?",rep:'1492'},//6
            {ques:"Combien font : (15x9)+(15x3) ?",rep:'180'},//7
            {ques:'Comment appelle-t-on le petit de la brebis ?' ,rep:'AGNEAU'},//8
            {ques:"Comment appelle-t-on l'explosion qui serait à l'origine de l'expansion de l'Univers",rep:'BIG BANG'},//9
            {ques:"Dans quelle articulation du corps humain se situe la rotule ?",rep:'GENOU'},//10
            {ques:"Combien de faces, un cube possède-t-il ?",rep:"6"},//11
            {ques:'Qui est considéré comme “le père” de la bombe atomique ?',rep:'ALBERT EINSTEIN'},//12
            {ques:'Dans la mythologie grecque, quelle créature est chargée de garder l’entrée des enfers ?',rep:'LE CERBERE'},//13
            {ques:'Au football, quel est historiquement le numéro du maillot attribué au gardien de but ?',rep:'1'},//14
            {ques:'Quel personnage de fiction a son nez qui grandit quand il ment ?',rep:'PINOCCHIO'},//15
            {ques:'Que trouve-t-on sur le casque d’Astérix le gaulois ?',rep:'DES AILES'},//16
            {ques:'Combien faut-il de zéros pour écrire en chiffres cinquante millions ?',rep:'7'},//17
            {ques:'Quel est le plus grand pays du monde ?',rep:'RUSSIE'},//18
            {ques:'Quel animal nommé Hedwige accompagne Harry Potter dans la saga du même nom ?',rep:'UNE CHOUETTE'},//19
            {ques:'Dans quel océan navigue-t-on au large de la ville de New York ?',rep:'ATLANTIQUE'}//20
        ]
    while (quesTab.length > 0) {
        const random = Math.floor(Math.random() * quesTab.length);
        const rep = await input({ message: `${quesTab[random].ques.yellow}\n` });
        if
            (rep.toLowerCase() === quesTab[random].rep.toLowerCase()) 
        {
            console.log('Bonne réponse !\n'.underline.green);
            scrore++;
        }
        else {
            console.log('Mauvaise réponse !\n'.underline.red);
            console.log(`Réponse : ${quesTab[random].rep}\n`.green)
        }
        quesTab.splice(random, 1);
    }
    
    console.log(`Bien joué ${nomJoueur},Tu as fait ${scrore} point(s) ! `)
})()
