import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import client from "@mailchimp/mailchimp_marketing";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

app.post("/api/add-contact", async (req, res) => {
    try {
        const { email, firstName, lastName } = req.body;

        const response = await client.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName || "",
                    LNAME: lastName || "",
                },
            }
        );

        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error("Mailchimp Error:", error);

        res.status(500).json({
            success: false,
            error: error.response?.body || error.message,
        });
    }
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!", status: "success" });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
