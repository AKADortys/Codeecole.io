 const { input } = require('@inquirer/prompts');
// // // (async function () {
// // //   const n = await input({ message: 'Indique un nombre :' });
// // //   parseInt(n);
// // //   function nbrPremier(nbr) {
// // //     for (var i = 2; i < nbr; i++){
// // //       if (nbr % i === 0) return false;
// // //       console.log(i)
// // //     return nbr > 1;
// // //   }};

// // //   console.log(nbrPremier(n));


// // })()
// // Demande à l'utilisateur de saisir une valeur pour n
// (async function()
// {

//   let n = await input({message: "Entrez une valeur pour n :"});
//   n = parseInt(n);
  
//   // Initialise le compteur
//   let num = 2;
  
//   // Utilise une boucle while pour parcourir chaque nombre jusqu'à n
//   while (num <= n) {
//     // Utilise une boucle interne pour vérifier si le nombre est premier
//     let isPrime = true;
//     let i = 2;
//     while (i <= Math.sqrt(num)) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//       i++;
//     }
//     // Si le nombre est premier, l'affiche
//     if (isPrime) {
//       console.log(num);
//     }
//     num++;
//   }
// }
//   )()
(async function() {

  const nb = await input({message: 'Donne un nombre'})
  nb = parseInt(nb)
  while()
})();