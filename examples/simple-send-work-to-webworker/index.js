import createClient from '../../createClient';

async function main() {
    const client = createClient(new Worker(
        new URL('worker.js', import.meta.url), 
        { type: "module" }
    ));

    console.log(await client.sum(2, 3));
    console.log(await client.multiply(2, 3));
}

main().then(console.log, console.error);
