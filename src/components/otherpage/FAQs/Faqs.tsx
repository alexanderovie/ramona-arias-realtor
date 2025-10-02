import React from "react";
import { submitFAQQuestion } from "@/actions/faqAction";

export default function Faqs() {
    return (
        <>
            <div className="section-faqs tf-spacing-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Buying a Home Section */}
                            <div className="faq-item">
                                <h4 className="mb_18">🏡 Buying a Home</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq-buying"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-buying-1"
                                            className="accordion-title"
                                            data-bs-toggle="collapse"
                                            aria-expanded="true"
                                            aria-controls="accordion-faq-buying-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Where can I find houses for sale near me in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-buying-1"
                                            className="collapse show"
                                            data-bs-parent="#accordion-faq-buying"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    The best way is to use MLS listings and work with a licensed Realtor who has access to the latest properties. In Tampa, St. Petersburg, and Clearwater, new homes appear daily and often sell quickly.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona can create a customized property search for your preferred neighborhoods.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-buying-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-buying-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What should I know before buying a mobile home in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-buying-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-buying"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Mobile homes can be an affordable option, but it&apos;s important to check land ownership, park fees, and age restrictions. Financing may differ compared to traditional homes.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona helps buyers understand the details of purchasing mobile homes in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-buying-3"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-buying-3"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How do I calculate closing costs in Tampa?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-buying-3"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-buying"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Closing costs usually range from 2% to 5% of the purchase price and include appraisal, title insurance, and local taxes. Costs vary by county and lender.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Contact Ramona for a personalized estimate based on your target property.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Renting Property Section */}
                            <div className="faq-item">
                                <h4 className="mb_18">🏘️ Renting Property</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq-renting"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-renting-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-renting-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How can I find apartments for rent near me in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-renting-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-renting"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Online listings, rental platforms, and Realtors are the most common sources. Working with a Realtor gives you access to verified properties and avoids scams.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona connects renters with safe and affordable housing in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-renting-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-renting-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What&apos;s the difference between renting an apartment and a townhome?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-renting-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-renting"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Apartments are typically part of larger complexes with shared amenities, while townhomes offer more privacy and often come with private garages or yards.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona can guide you to the right rental option based on your lifestyle and budget.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Land & Investment Section */}
                            <div className="faq-item">
                                <h4 className="mb_18">🌱 Land & Investment</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq-investment"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-investment-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-investment-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What permits do I need to buy land in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-investment-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-investment"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Requirements depend on zoning, location, and intended use (residential vs. commercial). You may need surveys, environmental checks, and permits before building.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona helps investors connect with local authorities to ensure compliance.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-investment-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-investment-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Is Tampa a good place to invest in real estate?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-investment-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-investment"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Yes. Tampa Bay is one of Florida&apos;s fastest-growing markets, attracting both homeowners and investors. Strong rental demand and steady appreciation make it attractive for long-term investments.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona provides tailored investment strategies for Tampa, St. Petersburg, and Clearwater.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Property Taxes & Valuation Section */}
                            <div className="faq-item">
                                <h4 className="mb_18">💰 Property Taxes & Valuation</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq-taxes"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-taxes-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-taxes-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How do I calculate property taxes in Hillsborough County?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-taxes-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-taxes"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Property taxes are based on assessed value and millage rates set by the county. For Hillsborough County, you can check the Property Appraiser&apos;s website for accurate numbers.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona can guide you in estimating taxes for homes in Tampa and surrounding areas.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-taxes-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-taxes-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What is a Property Appraiser and why do I need one in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-taxes-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-taxes"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    A property appraiser determines the market value of your home for taxes and ensures fair assessments. In Florida, each county has an office dedicated to this service.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona helps clients interpret appraisals when buying or selling in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Property Management Section */}
                            <div className="faq-item">
                                <h4 className="mb_18">🏠 Property Management</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq-management"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-management-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-management-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What does a property management company do in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-management-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-management"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Property managers handle tenant screening, rent collection, maintenance, and legal compliance. They are especially useful for investors who don&apos;t live locally.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona partners with trusted property management firms in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-management-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-management-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Is it worth hiring a property manager for investment properties in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-management-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq-management"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Yes, especially if you own multiple properties or live outside the area. Professional management saves time, reduces risk, and maximizes returns.
                                                </p>
                                                <p className="text_primary-color fw-6">
                                                    👉 Ramona helps investors connect with reliable management services.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar-faqs">
                                <div className="widget widget-faqs">
                                    <h4 className="title mb_20">Ask a Question</h4>
                                    <form action={submitFAQQuestion}>
                                        <div className="form-group mb_20">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb_20">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb_20">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                required
                                            />
                                        </div>
                                        <div className="form-group mb_20">
                                            <textarea
                                                name="message"
                                                placeholder="Your Question"
                                                rows={5}
                                                required
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="tf-btn btn-bg-1 btn-px-24 w-100"
                                        >
                                            <span>Send Question</span>
                                            <span className="bg-effect"></span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}