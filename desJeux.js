const { input, select, checkbox } = require('@inquirer/prompts');


(async function () {

    const nbrj = await select({
        message: 'Nombre de joueurs :',
        choices: [
            { value: '2 joueurs' },
            { value: '3 joueurs' },
            { value: '4 joueurs' }
        ]

    })
    if (nbrj === '2 joueurs') {
        const nom = await input({ message: "Joueur 1\n \nEntrer un nom :" });
        const nom2 = await input({ message: "Joueur 2\n \nEntrez votre nom :" });
        const j1 = { nom: nom, point: 0 };
        const j2 = { nom: nom2, point: 0 };
        const jet = [, , , , ,]
        while (j1.point < 10000 && j2.point < 10000) {
            while (jet.length > 0) {
                const random = Math.floor(Math.random() * 6) + 1;
                const random1 = Math.floor(Math.random() * 6) + 1;
                const random2 = Math.floor(Math.random() * 6) + 1;
                const random3 = Math.floor(Math.random() * 6) + 1;
                const random4 = Math.floor(Math.random() * 6) + 1;
                const random5 = Math.floor(Math.random() * 6) + 1;

                const jet = [random, random1, random2, random3, random4, random5];
                console.log(`${j1.nom} c'est à votre tour !`);

                await input({ message: 'Appuyer sur "ENTREE" pour lancer les dés.\n' })

                console.log(`${random} ${random1} ${random2} ${random3} ${random4} ${random5}`)

                const choix = await checkbox({
                    message: `Que voulez vous garder ? :`,
                    choices: [
                        { value: jet[0] },
                        { value: jet[1] },
                        { value: jet[2] },
                        { value: jet[3] },
                        { value: jet[4] },
                        { value: jet[5] },
                    ]
                })
                jet.splice[0, choix.length];
                console.log(typeof (choix))
            }
        }
    }
    else if (nbrj === '3 joueurs') {
        const nom = await input({ message: "Joueur 1\n \nEntrer un nom :" });
        const nom2 = await input({ message: "Joueur 2\n \nEntrez votre nom :" });
        const nom3 = await input({ message: "Joueur 3\n \nEntrez votre nom :" });
        const j1 = { nom: nom, point: 0 };
        const j2 = { nom: nom2, point: 0 };
        const j3 = { nom: nom3, point: 0 };
    }
    else if (nbrj === '4 joueurs') {
        const nom = await input({ message: "Joueur 1\n \nEntrer un nom :" });
        const nom2 = await input({ message: "Joueur 2\n \nEntrez votre nom :" });
        const nom3 = await input({ message: "Joueur 3\n \nEntrez votre nom :" });
        const nom4 = await input({ message: "Joueur 4\n \nEntrez votre nom :" });
        const j1 = { nom: nom, point: 0 };
        const j2 = { nom: nom2, point: 0 };
        const j3 = { nom: nom3, point: 0 };
        const j4 = { nom: nom4, point: 0 };
    }


})()









