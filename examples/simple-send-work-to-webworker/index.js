import 'babel-polyfill';
import factory from '../../factory';

async function main() {
    const client = factory.createClient(new Worker('worker.js'));

    console.log(await client.sum(2, 3));
    console.log(await client.multiply(2, 3));
}

main().then(console.log, console.error);
