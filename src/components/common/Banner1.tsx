import React from "react";

export default function Banner1() {
    return (
        <div className="banner">
            <div
                className="parallaxie"
                style={{
                    background: 'url("/assets/images/section/banner.jpg")',
                }}
            >
                <div className="tf-container z-5">
                    <h2 className="text_white mb_20">
                        Ready to Start Your Tampa Bay <br />
                        Real Estate Journey?
                    </h2>
                    <p className="text_white text-body-1 mb_20">
                        Whether you're buying, selling, or investing in Tampa Bay, Ramona Arias Realtor is here to guide you with personalized attention and trusted expertise.
                    </p>
                    <p className="text_white text-body-1">
                        👉 Schedule your consultation today and start your real estate journey with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
}
