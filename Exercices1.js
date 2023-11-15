const { input, select } = require('@inquirer/prompts');

(async function () {

    //Exercice 1    

    // const rep = await input({ message: "Donne un mois de l'année : " });
    // const un = 'janvier';
    // const deux = 'fevrier';
    // const trois = 'mars';
    // const cinq = 'mai';
    // const quatre = 'avril';
    // const six = 'juin';
    // const sept = 'juillet';
    // const huit = 'aout';
    // const neuf = 'septembre';
    // const dix = 'octobre';
    // const onze = 'novembre';
    // const douze = 'decembre';

    const mois_31 = ['JANVIER','MARS','MAI','JUILLET','AOUT','OCTOBRE','DECEMBRE'];
    const mois_30 = ['AVRIL','JUIN','SEPTEMBRE','NOVEMBRE'];
    let Rep = await input({message:"Donne un moi de l'année"});
    Rep = Rep.toUpperCase();

    if (mois_31.includes(Rep) ){
        console.log ('ce mois comporte 31 jours')
    }
    else if (mois_30.includes(Rep)){console.log('Ce mois comporte 30 jours')}
    else if (Rep=='FEVRIER'){console.log('Ce mois comporte 28')}
    else {console.log('mauvaise entrée')};




    // const rep = await input({message:"Donne un moi de l'année"});
    // const Ljour = 'Ce mois comporte 31 jours.';
    // const Cjour = 'Cemois comporte 30 jours.';
    // const fev = 'Ce mois contient 28 jours';

    // if (rep == 'janvier') { console.log(Ljour) }
    // else if (rep == 'fevrier') { console.log(fev) }
    // else if (rep == 'mars') { console.log(Ljour) }
    // else if (rep == 'avril') { console.log(Cjour) }
    // else if (rep ==  'mai') { console.log(Ljour) }
    // else if (rep =='juin') { console.log(Cjour) }
    // else if (rep == 'juillet') { console.log(Ljour) }
    // else if (rep == 'aout') { console.log(Ljour) }
    // else if (rep == 'septembre') { console.log(Cjour) }
    // else if (rep == 'octobre') { console.log(Ljour) }
    // else if (rep == 'novembre') { console.log(Cjour) }
    // else if (rep == 'decembre') { console.log(Ljour) };

    let rep = await input({ message: "Donne un mois de l'année : " });
    rep = rep.toLowerCase();

    if (rep == 'janvier' || rep == 'mars' || rep == 'mai' || rep == 'juillet' || rep == 'aout' || rep == 'octobre' || rep == 'decembre') {
        console.log('31 jours')
    }
    else if (rep == 'fevrier') { console.log('28 jours') }
    else if (rep == 'avril' || rep == 'juin' || rep == 'septembre' || rep == 'novembre') {
        console.log('30 jours');
    }


    //Exercice 2
    

    const rep1 = await input({ message: 'Donne un chiffre de 1 à 100 .' });
    if (rep1 > 100) { console.log("tu n'as pas respecter la consigne.") }
    else if (rep1 >= 90) { console.log('A') }
    else if (rep1 >= 80) { console.log('B') }
    else if (rep1 >= 70) { console.log('C') }
    else if (rep1 >= 60) { console.log('D') }
    else if (rep1 <= 59) { console.log('E') }
    else if (rep1 < 0) { console.log("Tu n'as pas respecter la consigne.") };

    //Exercice 3

    let poids = await input({ message: 'Donne un poids en KG .' });
    const geo = await select({
        message: 'type de lvraison?',
        choices: [
            { value: 'Local' },
            { value: 'National' },
            { value: 'International' },
        ]
    });
    parseFloat(poids);
    if (geo == 'Local') { poids *= 2; poids += 5; }
    else if (geo == 'National') {

        if (poids < 10) { poids *= 4; poids += 10; }
        else { poids *= 3; poids += 10 };
    }

    else if (geo == 'International') {
        if (poids < 5) { poids *= 10; poids += 15; }
        else { poids *= 7; poids += 15; }
    };
    console.log(poids)

})();


