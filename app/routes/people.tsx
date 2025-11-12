import React from "react";
import "./people.css";
import PartnerInfo from "../components/ParterInfo";
export default function People() {
    return (
        <>
            <h1>People Page</h1>
            <div className="container">
                <div className="item-a">
                    <PartnerInfo
                        title="Aaron Bachenheimer"
                        text="Ed.D, Associate Vice Chancellor for Student Engagement, UNC-Chapel Hill"
                    />
                </div>
                <div className="item-b">
                    <PartnerInfo
                        title="Loryn Clark"
                        text="A.I.C.P., Deputy Town Manager, Town of Chapel Hill"
                    />
                </div>
                <div className="item-c">
                    <PartnerInfo
                        title="Marcy Williams"
                        text="M.P.H., Health Promotion and Education Services Director, Orange County Health Department"
                    />
                </div>
                <div className="item-d">
                    <PartnerInfo
                        title="Fran Muse"
                        text="J.D., Director, Carolina Student Legal Services"
                    />
                </div>
                <div className="item-e">
                    <PartnerInfo
                        title="Melissa Cox"
                        text="Ph.D., Faculty, UNC Gillings School of Global Public Health"
                    />
                </div>
                <div className="item-f">
                    <PartnerInfo
                        title="Lorem Ipsum"
                        text="The quick brown fox jumps over the lazy dog."
                    />
                </div>
            </div>
        </>
    );
}
