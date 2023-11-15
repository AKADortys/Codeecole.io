//poser 7 questions stockées de façon aléatoire à l'utilisateur puis comparer ces réponses  et comptabiliser les erreurs
const { input } = require('@inquirer/prompts');

(async function () {
    //stocker les question dans un tableau
    let tab = [
        'Quel est ton nom ?',
        'Quel est ton prénom ?',
        'Quel est ton âge ?',
        'Quel est ta ville ?',
        'Quel est ton pays ?',
        'Quel est ton sexe ?',
        'Quel est ton animal préféré ?'
    ];
    //créer deux variables 'i' pour la boucle while, 'e' pour le compteur d'erreur

    let i = 0;
    let e = 0;

    while (i < 7) {

        //créer trois variables la première sert à utiliser math.floor qui va convertir un nombre décimal en entier. le nombre fournis ici fait appel à math.random() qui va lui générer un nombres décimal entre 0 et 1 et ce nombre sera multiplier par la taille du tableau (7)

        const random = Math.floor(Math.random() * tab.length);

        //la seconde me permet juste de raccourcir mon code

        const quest = tab[random];

        //enfin la dernière sert à stocker la réponse de l'utilisateur, je fait appel à 'quest' afin d'afficher un des éléments du tableau de facon aléatoire

        const rep = await input({ message: quest });

        //ici la conddition commence : "quest" est ici pour verifier de quelle question il s'agit. ensuite "rep" est comparé avec les réponses

        if (
            quest === 'Quel est ton nom ?' && rep === 'Ancel' ||
            quest === 'Quel est ton prénom ?' && rep === 'Thibault' ||
            quest === 'Quel est ton âge ?' && rep === '26' ||
            quest === 'Quel est ta ville ?' && rep === 'Mouscron' ||
            quest === 'Quel est ton pays ?' && rep === 'Belgique' ||
            quest === 'Quel est ton sexe ?' && rep === 'Homme' ||
            quest === 'Quel est ton animal préféré ?' && rep === 'Chat'
        ) { }

        //les opérateurs logique "&&" et "||" sont utiliser ici pour obetnir de façons précise quelle question est associée à tel réponse (&&) et le (||) sert à savoir quelle question est sélectioné par 'quest'

        else { e++ }

        //En fin de boucle je retire la question utilisée pour qu'elle ne revienne pas à nouveau

        tab.splice(random, 1);

        i++;

    }
    console.log(`${e} erreur(s)`)
})();
