import React from "react";

type TimeLine = {
    year: string;
    title: string;
    text: string;
};

const history: TimeLine[] = [
    {
        year: "2025",
        title: "Licensed Realtor",
        text: "Ramona became a licensed Florida Realtor and began serving families and investors in Tampa Bay.",
    },
    {
        year: "2025",
        title: "Modern Tools & Solutions",
        text: "Adopted modern tools and digital solutions to simplify property searches and improve client experience.",
    },
    {
        year: "2026",
        title: "Expanding Services",
        text: "Committed to expanding services and building lasting relationships across Tampa, St. Petersburg, and Clearwater.",
    },
];

export default function OurHistory() {
    return (
        <>
            <div className=" t-container">
                <div className="heading-section justify-content-center text-center mb_48">
                    <span className="sub text-uppercase fw-6 text_secondary-color-2">
                        Our History
                    </span>
                    <h3 className="split-text effect-blur-fade">Milestones That Define Us</h3>
                </div>
            </div>
            <div className="content">
                <div className="tf-container w-xl">
                    <div className="wrap-time-line">
                        {history.map((item, index) => (
                            <div className="time-item" key={index}>
                                <div className="heading">
                                    <h3 className="mb_8">{item.year}</h3>
                                    <span className="sub text-label text-uppercase fw-6 ">
                                        {item.title}
                                    </span>
                                </div>
                                <div className="dot"></div>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
