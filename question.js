const { input, select } = require('@inquirer/prompts');



// (async function () {
//     const reponse = await input({ message: 'quel est votre âge ?' });
//     if (reponse < 18) { console.log('tu es mineur') }
//     else if (reponse == 18) { console.log('Tu as 18 ans') }
//     else if (reponse > 18) { console.log('Tu es majeur') };
// })()
(async function() {
    // civilité Monsieur ou madame
    // age
    // quel est son navigateur préféré [chrome, brave, edge, firefox]
    
    // Bonjour monsieur, vous avez x années et votre navigateur est … 
    // Bonjour madame, vous avez x années et votre navigateur est … 
    
    const civilite = await input({ message: 'Quelle est votre civilité ?' });
    
    const age = await input({ message: 'Quel est votre âge ?' }
    );

    const navigateur = await select({ message: 'quel est votre navigateur ?',
choices :[
    {value : 'Chrome'},
    {value : 'Edge'},
    {value : 'Mozila'},
    {value : 'Opera'},
] });
    
    console.log(`Bonjour ${civilite}, vous avez ${age} années et votre navigateur est ${navigateur}`)
    
})()