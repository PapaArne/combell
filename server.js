const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serveer statische bestanden (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// API-endpoint
app.get("/api/message", (req, res) => {
    res.json({ message: "Welkom bij mijn Node.js applicatie!" });
});

// Start de server
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});

