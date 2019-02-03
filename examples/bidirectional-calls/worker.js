import 'babel-polyfill';
import MoleClient from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';

import TransportServer from '../../TransportServer';
import TransportClient from '../../TransportClient';

import { sum, multiply } from '../utils';

async function main() {
    // Server
    const server = new MoleServer({ transports: [new TransportServer({ worker: self })] });
    server.expose({ sum, multiply });
    await server.run();

    // Client
    const client = new MoleClient({
        requestTimeout: 1000,
        transport: new TransportClient({ worker: self })
    });

    console.log(await client.divide(2, 3));
    console.log(await client.substract(2, 3));
}

main().catch(console.error);
