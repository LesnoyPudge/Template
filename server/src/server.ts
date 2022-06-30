import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    }),
);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '../client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });
}

async function start() {
    try {
        app.listen(PORT, () => console.log(`Server started at: ${PORT}`));
    } catch (error) {
        console.log('Error: ', error);
        throw new Error(error);
    }
}

start();
