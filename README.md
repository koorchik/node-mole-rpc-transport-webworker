Webworker Transport for Mole RPC (JSON RPC Library) 
---------------------------------------------------

[![npm version](https://badge.fury.io/js/mole-rpc-transport-webworker.svg)](https://badge.fury.io/js/mole-rpc-transport-webworker)
[![Build Status](https://travis-ci.org/koorchik/node-mole-rpc-transport-webworker.svg?branch=master)](https://travis-ci.org/koorchik/node-mole-rpc-transport-webworker)
[![Known Vulnerabilities](https://snyk.io/test/github/koorchik/node-mole-rpc-transport-webworker/badge.svg?targetFile=package.json)](https://snyk.io/test/github/koorchik/node-mole-rpc-transport-webworker?targetFile=package.json)

**Offload intensive calculations to WebWorker with just several lines of code.**

[Mole-RPC](https://www.npmjs.com/package/mole-rpc) is a tiny transport agnostic JSON-RPC 2.0 client and server which can work both in NodeJs, Browser, Electron etc.

This is WebWorker based transport but there are [many more transports](https://www.npmjs.com/search?q=keywords:mole-transport). 


**What is the reason of using JSON-RPC for WebWorkers?**

People usually send data to WebWorker in a form like `{id, method, params}` in JSON format via postMessage. As a result they expect `{id, result}`. And this is what JSON RPC is. `id` is required when you send several request and need to map results and requests.

So, why to write own solution every time? This transport allows you use JSON RPC for calling methods in WebWorkers. Moreover, it will handle all of edge-cases like errors processing, timeouts, batch calls, bidirectional communication etc. 

**Mole-RPC has zero dependencies and is a very small library.**

## Usage example (with simplified API)

**worker.js**

```javascript
import expose from 'mole-rpc-transport-webworker/expose';

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

expose({ sum, multiply }).catch(console.error);

```

**index.js**

```javascript
import createClient from 'mole-rpc-transport-webworker/createClient';

async function main() {
  const client = createClient(new Worker('worker.js'));
  const result = await client.sum(2, 3);
}

main().then(console.log, console.error);
```

You can pass extra Mole-RPC options to createClient as second parameter.

For example

```js
const client = createClient(new Worker('worker.js'), { 
  requestTimeout: 1000 
});
```

## More examples 

### Simple API for sending work to your web worker (recommended).

See [examples/simple-send-work-to-webworker](./examples/simple-send-work-to-webworker/)

### Standard API for sending work to your web worker.

See [examples/send-work-to-webworker](./examples/send-work-to-webworker/)

### Bidirectional connection

Each side works as client and server the same time.

See [examples/bidirectional-calls](./examples/bidirectional-calls/)
