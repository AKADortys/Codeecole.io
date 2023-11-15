const {input} = require('@inquirer/prompts');
(async function()
{
    const n = await input({message:'Indique un nombre :'});
    parseInt(n);
    let i = 1;
    let somme =0;
    while(i<=n)
    {
        if(i%2!==0)
        {
            console.log('IMPAIR')
            somme+=i;
        }
        console.log(i);
        i++;
    }
console.log(`${somme} total.`)
}
)();