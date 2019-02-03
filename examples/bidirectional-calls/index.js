import 'babel-polyfill';
import MoleClient from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';
import TransportClient from '../../TransportClient';
import TransportServer from '../../TransportServer';
import { substract, divide } from '../utils';

async function main() {
    const worker = new Worker('worker.js');

    // Server
    const server = new MoleServer({ transports: [new TransportServer({ worker })] });
    server.expose({ substract, divide });
    await server.run();

    // // Client
    const client = new MoleClient({
        requestTimeout: 1000,
        transport: new TransportClient({ worker })
    });

    console.log(await client.sum(2, 3));
    console.log(await client.multiply(2, 3));
}

main().then(console.log, console.error);
