import MoleClient from 'mole-rpc/MoleClientProxified';
import TransportClient from './TransportClient';

function createClient(worker, options = {}) {
    return new MoleClient({
        ...options,
        transport: new TransportClient({ worker })
    });
}

module.exports = createClient;
