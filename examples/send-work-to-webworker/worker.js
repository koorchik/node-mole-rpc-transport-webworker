import 'babel-polyfill';
import MoleServer from 'mole-rpc/MoleServer';
import TransportServer from '../../TransportServer';
import { sum, multiply } from '../utils';

async function main() {
    const server = new MoleServer({
        transports: [
            new TransportServer({ worker: self })
        ]
    });

    server.expose({ sum, multiply });
    await server.run();
}

main().catch(console.error);
