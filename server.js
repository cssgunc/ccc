import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import client from "@mailchimp/mailchimp_marketing";

dotenv.config(); //loading the .env variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CI_IDS = {
    binge: "100250717",
    party: "100061976",
};

const app = express();
const port = 3000;

app.use(express.json());

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

//GET route to fetch each posted newsletter from mailchimp
app.get("/api/newsletters", async (req, res) => {
    try {
        //calling the mailchimp api to get a list of all the campaigns
        //this will return an object with a 'campaigns' array
        const response = await client.campaigns.list({
            //setting the number of campaigns to retrieve from the api
            count: 100,
            //only getting sent campaigns, not drafts or scheduled ones
            status: "sent",
            //sorting by desc order so the newest comes first
            sort_field: "send_time",
            sort_dir: "DESC",
        });

        //extracting the campaigns array from the response
        //empty array as safeguard
        const campaigns = response.campaigns || [];

        //transforming the data into the format needed for frontend
        const newsletters = campaigns.map((campaign) => {
            //the send time
            const sendTime = campaign.send_time;
            //the date of the send time
            const date = new Date(sendTime);
            //formatting the data as m/d/y
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(-2)}`;

            //the new object
            return {
                id: campaign.id,
                title: campaign.settings.title || "Untitled Newsletter",
                date: formattedDate,
                href: campaign.archive_url || "",
            };
        });

        //success response w/ new newsletter array
        res.status(200).json({
            success: true,
            data: newsletters,
        });
    } catch (error) {
        console.error("Mailchimp Newsletter Fetch Error:", error);

        //error response
        res.status(500).json({
            success: false,
            error: error.response?.body || error.message,
        });
    }
});

//adding a subscriber to the mailchimp newsletter
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
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!", status: "success" });
});

if (process.env.NODE_ENV !== "production") {
    app.listen(port, () => {
        console.log(`Server is listening at http://localhost:${port}`);
    });
}

//get request for clear impact data for data page
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
export default app;
