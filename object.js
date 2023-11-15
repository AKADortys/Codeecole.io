//création d'objet
const obj1 = {
    age: 26
}

//creation d'un objet
const user =
{
    firstName: 'Thibault',
    lastName: 'Ancel',
}

//ajouter une clé à un objet
user.gender = 'Homme';
user['adresse'] = 'Avenue des comtes, 58'

// supprimer une clé
delete user.adresse
console.log(user)

//recupérer que les clés
console.log(Object.values(user))
console.log(Object.keys(user))

//fussionner des object
Object.assign(user, obj1)
console.log(user)

//changer une valeur
user.gender = 'Femme';

//verouiller le contenue d'un objet
Object.freeze(user)

//
const users = [
    { firstName: 'Thibault', lastName: 'Ancel', address: [{ street: 'Avenue des comtes', number: 58 }] },
    { firstName: 'Marc', lastName: 'Pierraud', address: [{ street: 'Rue des bouviers', number: 112 }] },
    { firstName: 'Alex', lastName: 'Vlaams', address: [{ street: 'Rue Mattéotie', number: 89 }, { street: 'Rue de Menin', number: 12 }] },
    { firstName: 'David', lastName: 'Dupont', address: [] },
];

users.forEach((u) => {
    console.log(`${u.firstName} ${u.lastName}`);


    if (u.address.length > 0) {
        u.address.forEach((i) => {
            console.log(`${i.street} ${i.number}`);
        });
    } else {
        console.log("pas d'adresse valide");
    }
});





