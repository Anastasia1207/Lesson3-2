import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('Is it a palidrome?', function (answer){
    if (answer == answer.split('').reverse().join('')) {
        console.log('Yes');
    } else { 
        console.log('NO WAY!!');
    }
    rl.close()
})