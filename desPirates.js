const { input } = require('@inquirer/prompts');

(async function () {

    console.log('Jouons aux dés mousaillon !\n');

    const j1 = await input({ message: 'NOM JOUEUR 1 :\n' });
    const j2 = await input({ message: 'NOM JOUEUR 2 :\n' });
    const j3 = await input({ message: 'NOM JOUEUR 3 :\n' });
    const j4 = await input({ message: 'NOM JOUEUR 4 :\n' });
    const player = [
        { name: j1, coin: 0, blam: 0 },
        { name: j2, coin: 0, blam: 0 },
        { name: j3, coin: 0, blam: 0 },
        { name: j4, coin: 0, blam: 0 },
    ];
    const seleJou = Math.floor(Math.random() * 4);

    do {
        const jet = {
            d1: Math.floor(Math.random() * 6) + 1,
            d2: Math.floor(Math.random() * 6) + 1,
            d3: Math.floor(Math.random() * 6) + 1,
            d4: Math.floor(Math.random() * 6) + 1,
            d5: Math.floor(Math.random() * 6) + 1,
            d6: Math.floor(Math.random() * 6) + 1
        };

        const diceValues = [jet.d1, jet.d2, jet.d3, jet.d4, jet.d5, jet.d6];

        await input({ message: `${player[seleJou].name} APPUYER SUR ENTREE POUR LANCER LES DES !\nVos pièces : ${player[seleJou].coin}  Vos blames : ${player[seleJou].blam}` });
        console.log(`dés 1 : ${jet.d1} \ndés 2 : ${jet.d2} \ndés 3 : ${jet.d3} \ndés 4 : ${jet.d4} \ndés 5 : ${jet.d5} \ndés 6 : ${jet.d6}`);

        function calculatePoints(diceCount, diceValue) {
            if (diceCount >= 3) {
                if (diceValue === 1) {
                    return diceCount === 6 ? 2000 : 1000;
                } else {
                    return diceCount * 100 * diceValue;
                }
            }
            return 0;
        }

        for (const diceValue of [1, 2, 3, 4, 5, 6]) {
            const diceCount = diceValues.filter(value => value === diceValue).length;
            player[seleJou].coin += calculatePoints(diceCount, diceValue === 1 ? 10 : diceValue);
        }
    }
    while (player[seleJou].coin <= 800);

})();
