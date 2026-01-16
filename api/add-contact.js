import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

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
}
