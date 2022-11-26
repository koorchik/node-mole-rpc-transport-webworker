import MoleClient from 'mole-rpc/MoleClient';
import MoleClientProxified from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';
import X from 'mole-rpc/X';
import AutoTester from 'mole-rpc-autotester';

import TransportClient from '../../TransportClient';
import TransportServer from '../../TransportServer';
console.log('index');

async function main() {
    console.log('runAllTests');

    const server = await prepareServer();
    const clients = await prepareClients();

    const autoTester = new AutoTester({
        X,
        server,
        simpleClient: clients.simpleClient,
        proxifiedClient: clients.proxifiedClient
    });

    await autoTester.runAllTests();
}

async function prepareServer() {
    return new MoleServer({
        transports: [
            new TransportServer({ worker: self })
        ]
    });
}

async function prepareClients() {
    const simpleClient = new MoleClient({
        requestTimeout: 1000, // autotester expects this value
        transport: new TransportClient({ worker: self })
    });

    const proxifiedClient = new MoleClientProxified({
        requestTimeout: 1000, // autotester expects this value
        transport: new TransportClient({ worker: self })
    });

    return { simpleClient, proxifiedClient };
}

main().then(console.log, console.error);