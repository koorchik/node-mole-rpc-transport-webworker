import MoleClient from 'mole-rpc/MoleClientProxified';
import MoleServer from 'mole-rpc/MoleServer';
import TransportClient from './TransportClient';
import TransportServer from './TransportServer';

function createClient(worker, options = {}) {
    return new MoleClient({
        ...options,
        transport: new TransportClient({ worker })
    });
}

async function expose(methods) {
    const server = new MoleServer({ transports: [new TransportServer({ worker: self })] });
    server.expose(methods);
    await server.run();
}

module.exports = {
    createClient,
    expose
};
