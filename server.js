import express from "express";
import path from "path";
import { fileURLToPath } from "url";
// import mailchimp from "@mailchimp/mailchimp_marketing";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// mailchimp.setConfig({
//     apiKey: process.env.MAILCHIMP_API_KEY,
//     server: process.env.MAILCHIMP_SERVER_PREFIX,
// });

// const run = async () => {
//   const response = await mailchimp.audiences.createAudienceContact(
//     {
//         email_channel: "test@email.com"
//     },
//     process.env.MAILCHIMP_AUDIENCE_ID
//   );
//   console.log(response);
// };

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
    res.json({ message: "Hello from the server!", status: "success" });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
