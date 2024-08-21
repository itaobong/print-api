const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint for printing a message
app.post('/print', (req, res) => {
    const { inputText, printerIP } = req.body;

    if (!inputText || !printerIP) {
        return res.status(400).send({ error: 'Both inputText and printerIP are required' });
    }

    console.log(`Sending message "${inputText}" to printer at IP: ${printerIP}`);
    res.send({ status: 'Message sent to printer', inputText, printerIP });
});

// Use the environment port if available, otherwise default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
