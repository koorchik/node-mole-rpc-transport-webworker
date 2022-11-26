import MoleClient from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';

import TransportServer from '../../TransportServer';
import TransportClient from '../../TransportClient';

import { sum, multiply } from '../utils';

async function main() {
    // Server which will receice commands to the "self"
    const server = new MoleServer({ transports: [new TransportServer({ worker: self })] });
    server.expose({ sum, multiply });
    await server.run();

    // Client which will reply via the "self"
    const client = new MoleClient({
        requestTimeout: 1000,
        transport: new TransportClient({ worker: self })
    });

    console.log(
        'Result from main thread in worker',
        await client.divide(2, 3)
    );

    console.log(
        'Result from main thread in worker',
        await client.substract(2, 3)
    );
}

main().catch(console.error);
