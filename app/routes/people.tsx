import React from "react";
import "./people.css";
/*import PartnerInfo from "../components/ParterInfo";*/
export default function People() {
    return (
        <>
            <div className="page-heading">
                <h1
                    style={{
                        fontSize: "48px",
                        display: "flex",
                        justifyContent: "center",
                        margin: "40px",
                    }}
                >
                    Who We Are
                </h1>
            </div>
            <div className="director-info">
                <div className="director-photo"></div>
                <div className="director-info-text">
                    <h2 className="director-name">Samantha Lu, MPH</h2>
                    <p className="director-title">
                        Campus & Community Coalition Director
                    </p>
                    <p className="director-email">
                        samantha@downtownchapelhill.com
                    </p>
                    <p className="director-bio">
                        Samantha first worked with the CCC in 2018 and was
                        tickled to find her graduate team’s evaluation
                        deliverables in her new desk when she returned as
                        Director in 2022. As a two-time Tar Heel (BA 2014, MPH
                        2019), she is energized to serve the Chapel Hill
                        community in this role. She has previously worked on
                        mental and social well-being, sexual health, and youth
                        leadership development in domestic and global settings,
                        often wearing many different hats in those roles. When
                        she’s not facilitating CCC meetings or supporting CCC
                        partners, you can find her sipping coffee, gardening,
                        checking out local events, and traveling with her
                        husband and dog.
                    </p>
                </div>
            </div>
        </>
    );
}
