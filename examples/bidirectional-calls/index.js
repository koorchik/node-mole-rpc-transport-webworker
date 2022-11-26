import MoleClient from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';
import TransportClient from '../../TransportClient';
import TransportServer from '../../TransportServer';
import { substract, divide } from '../utils';

async function main() {
    const worker = new Worker(new URL('worker.js', import.meta.url), { type: "module" });

    // Server which will receive commands from the worker
    const server = new MoleServer({ transports: [new TransportServer({ worker })] });
    server.expose({ substract, divide });
    await server.run();

    // Client to send commands to the worker
    const client = new MoleClient({
        requestTimeout: 1000,
        transport: new TransportClient({ worker })
    });

    console.log(
        'Result from webworker in main thread',
        await client.sum(2, 3)
    );

    console.log(
        'Result from webworker in main thread',
        await client.multiply(2, 3)
    );
}

main().then(console.log, console.error);
