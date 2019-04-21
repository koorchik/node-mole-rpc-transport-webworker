## Webworker Transport for Mole RPC (JSON RPC Library)

### Usage example (with simplified API)

**index.js**

```javascript
import createClient from 'mole-rpc-transport-webworker/createClient';

async function main() {
    const client = createClient(new Worker('worker.js'));

    console.log(await client.sum(2, 3));
}

main().then(console.log, console.error);
```

**worker.js**

```javascript
import expose from 'mole-rpc-transport-webworker/expose';

const sum = (a, b) => a + b;

async function main() {
    await expose({ sum });
}

main().catch(console.error);
```

Webworker transport for Mole-RPC (JSON RPC library)

Take a look at examples:

### Simple API for sending work to your web worker (recommended).

See [examples/simple-send-work-to-webworker](./examples/simple-send-work-to-webworker/)

### Standard API for sending work to your web worker.

See [examples/send-work-to-webworker](./examples/send-work-to-webworker/)

### Bidirectional connection

Each side works as client and server the same time.

See [examples/bidirectional-calls](./examples/bidirectional-calls/)
