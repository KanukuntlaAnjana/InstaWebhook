const express = require("express");
const app = express();
app.use(express.json());

const VERIFY_TOKEN = "IGAAQLTOtW4T1BZAE9IZAUN1NElEZAUUta0xBUU50MVBHWlR1ZA0RQV1ZAyazlWLVNYTlNoQnJkZAXUtRUZAEX2lqZAF9DeGFDZAnVDWmdydEJpbTZAvS3NuUmxpSklCRnNLa1YxWHQyeEVwS1hYZA2pmOHdjMGtzMDh0Uk9LTmx3WFpaMHZApYwZDZDnode index.js"; // Replace with a secure token

// Webhook verification for Instagram API
app.get("/webhook", (req, res) => {
    if (req.query["hub.mode"] === "subscribe" && req.query["hub.verify_token"] === VERIFY_TOKEN) {
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        res.sendStatus(403);
    }
});

// Handle Instagram webhook events
app.post("/webhook", (req, res) => {
    console.log("Received Webhook:", JSON.stringify(req.body, null, 2));
    res.status(200).send("EVENT_RECEIVED");
});

app.listen(3000, () => console.log("Webhook server running on port 3000"));
