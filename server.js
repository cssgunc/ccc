import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CI_IDS = {
    binge: "100250717",
    party: "100061976",
};

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!", status: "success" });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

app.get("/api/ci/:which", async (req, res) => {
    const which = req.params.which;
    const id = CI_IDS[which];
    if (!id) return res.status(400).json({ error: "unknown dataset" });

    try {
        const body = {
            siteCode: process.env.CI_SITE_CODE,
            apiKey: process.env.CI_API_KEY,
            ID: id,
        };

        const r = await fetch(
            "https://api.resultsscorecard.com/api/datavalues/export",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "User-Agent": "curl/8.7.1",
                },
                body: JSON.stringify(body),
            }
        );

        const text = await r.text();
        if (!r.ok)
            return res
                .status(r.status)
                .type("application/json")
                .send(text || "");
        res.type("application/json").send(text || "{}");
    } catch {
        res.status(500).json({ error: "proxy error" });
    }
});
