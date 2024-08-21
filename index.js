const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/print', (req, res) => {
    const { inputText, printerIP } = req.body;

    if (!inputText || !printerIP) {
        return res.status(400).send({ error: 'Both inputText and printerIP are required' });
    }

    console.log(`Sending message "${inputText}" to printer at IP: ${printerIP}`);
    res.send({ status: 'Message sent to printer', inputText, printerIP });
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
