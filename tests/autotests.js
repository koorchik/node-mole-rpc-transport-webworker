const MoleClient = require('mole-rpc/MoleClient');
const MoleClientProxified = require('mole-rpc/MoleClientProxified');
const MoleServer = require('mole-rpc/MoleServer');
const AutoTester = require('mole-rpc/AutoTester');

const TransportClient = require('../TransportClient');
const TransportServer = require('../TransportServer');

async function main() {
    // TODO
    // console.log(`RUN ${__filename}`);
    // const [server, clients] = await Promise.all([prepareServer(), prepareClients()]);
    // const autoTester = new AutoTester({
    //     server,
    //     simpleClient: clients.simpleClient,
    //     proxifiedClient: clients.proxifiedClient
    // });
    // await autoTester.runAllTests();
}

main().then(() => {
    process.exit();
}, console.error);
