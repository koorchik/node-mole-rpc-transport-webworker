import 'babel-polyfill';
import createClient from '../../createClient';

async function main() {
    const client = createClient(new Worker('worker.js'));

    console.log(await client.sum(2, 3));
    console.log(await client.multiply(2, 3));
}

main().then(console.log, console.error);
