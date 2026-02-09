# Maintenance Guide

This document is an overview of the project structure, along with guides on other good-to-know items.

## Page Layout

Most of what you will need will be under the `app` folder.

app \
├── assets&nbsp;&nbsp;&nbsp; # Contains all images \
&nbsp;&nbsp;&nbsp;└── icons&nbsp;&nbsp;&nbsp; # Contains all icons \
├── components&nbsp;&nbsp;&nbsp; # Contains all components \
├── helpers&nbsp;&nbsp;&nbsp; # Helper functions \
├── lib&nbsp;&nbsp;&nbsp; # Lib import to merge tailwind functions \
└── routes&nbsp;&nbsp;&nbsp; # All physical pages are stored within here \
&nbsp;&nbsp;&nbsp;└── data.tsx&nbsp;&nbsp;&nbsp; # `Data` page \
&nbsp;&nbsp;&nbsp;└── newsletter.tsx&nbsp;&nbsp;&nbsp; # `Our Newsletter` page \
&nbsp;&nbsp;&nbsp;└── people.tsx&nbsp;&nbsp;&nbsp; # `Who We Are` page \
&nbsp;&nbsp;&nbsp;└── research.tsx&nbsp;&nbsp;&nbsp; # `Resources` page \
&nbsp;&nbsp;&nbsp;└── starter.tsx&nbsp;&nbsp;&nbsp; # `Home` page \
├── app.css&nbsp;&nbsp;&nbsp; # Global CSS file \
├── root.tsx&nbsp;&nbsp;&nbsp; # Project root\
├── routes.ts&nbsp;&nbsp;&nbsp; # Defined React Router routes

The Express backend, which was migrated to Vercel-compatible serverless functions can be found under the `api` folder.

- /api/newsletters.js for fetching Mailchimp campaigns (Our Newsletter page)
- /api/add-contact.js for newsletter subscriptions (Our Newsletter page)
- /api/ci/[which].js for Clear Impact data (Data page)

## Running the development server

To test your code, you need to run two commands in two separate terminals. \
In one terminal, run `npm start`. This will start the backend. \
In the other terminal, run `npm run dev`. This will start the frontend and provide you with the local host link.

## Adding a new report card

All report cards can be found in the `Resources` page. The code can be found under `app/routes/research.tsx`.
To add a new card simply copy and paste this code and change the
title, summary, button text, and onClick link respectively. To add a new report pdf, you first need to add
it under `app/assets` as a new .pdf file. Then you need to import it at the top of `app/routes/research.tsx`.

```
<ReportCard
    title="UNC-CH Color of Drinking Project"
    summary="The Color of Drinking survey at UNC-Chapel Hill revealed that students, particularly LGBTQ+ individuals and students of color, face disproportionate mental health and safety harms from the campus alcohol culture despite drinking less than their white, non-LGBTQ+ peers."
    buttonText="View Report"
    onClick={() => {
        openPDF(report3);
    }}
/>
```
