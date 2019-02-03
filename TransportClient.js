class TransportClient {
    constructor({ worker } = {}) {
        if (!worker) throw new Error('"worker" required');
        this.worker = worker;
    }

    async onData(callback) {
        this.worker.addEventListener('message', event => {
            callback(event.data);
        });
    }

    async sendData(data) {
        await this.worker.postMessage(data);
    }
}

module.exports = TransportClient;
