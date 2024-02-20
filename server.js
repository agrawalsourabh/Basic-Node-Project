const express = require('express');
const { friendsRouter } = require('./routers/friends.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.baseUrl}${req.url}`);
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get('/hello', (req, res) => {
    res.send({
        id: 1,
        test: 'Hello from Express'
    });
});

app.use('/friends', friendsRouter);

app.listen(PORT, ()=> {
    console.log(`Listening to port: ${PORT}`);
});