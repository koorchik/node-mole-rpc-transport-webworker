# Autotests

We run autotester in main thread because AutoTester must have access to the clients and the server. So, we pass window object as worker as it has the same API. 

### How to run?

1. npm install
2. npm start
3. Open http://localhost:1234/
4. Open browser dev tools to see call logs
