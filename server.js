import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!", status: "success" });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
