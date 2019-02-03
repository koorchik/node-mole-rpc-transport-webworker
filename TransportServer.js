class TransportServer {
    constructor({ worker } = {}) {
        if (!worker) throw new Error('"worker" required');
        this.worker = worker;
    }

    async onData(callback) {
        this.worker.addEventListener('message', async event => {
            const resData = await callback(event.data);
            if (!resData) return;

            this.worker.postMessage(resData);
        });
    }
}

module.exports = TransportServer;
