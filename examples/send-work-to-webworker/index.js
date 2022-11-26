import MoleClient from 'mole-rpc/MoleClientProxified';
import TransportClient from '../../TransportClient';

async function main() {
    const worker = new Worker(
        new URL('worker.js', import.meta.url), 
        { type: "module" }
    );

    const client = new MoleClient({
        requestTimeout: 1000,
        transport: new TransportClient({ worker })
    });

    console.log(await client.sum(2, 3));
    console.log(await client.multiply(2, 3));
}

main().then(console.log, console.error);
