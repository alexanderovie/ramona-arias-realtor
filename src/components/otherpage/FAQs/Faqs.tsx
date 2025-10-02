import DropdownSelect2 from "@/components/common/DropdownSelect2";
import React from "react";
import { submitFAQQuestion } from "@/actions/faqAction";

export default function Faqs() {
    return (
        <>
            <div className="section-faqs tf-spacing-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="faq-item">
                                <h4 className="mb_18">Buying Property</h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1"
                                            className="accordion-title "
                                            data-bs-toggle="collapse"
                                            aria-expanded="true"
                                            aria-controls="accordion-faq-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Where can I find houses for sale near me in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1"
                                            className="collapse show"
                                            data-bs-parent="#accordion-faq"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    The best way is to use MLS listings and work with a licensed Realtor who has access to the latest properties. In Tampa, St. Petersburg, and Clearwater, new homes appear daily and often sell quickly.
                                                </p>
                                                <p>
                                                    Ramona can create a customized property search for your preferred neighborhoods in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How do I calculate closing costs in Tampa?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Closing costs usually range from 2% to 5% of the purchase price and include appraisal, title insurance, and local taxes. Costs vary by county and lender.
                                                </p>
                                                <p>
                                                    Contact Ramona for a personalized estimate based on your target property in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-3"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-3"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What should I know before buying a mobile home in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-3"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Mobile homes can be an affordable option, but it&apos;s important to check land ownership, park fees, and age restrictions. Financing may differ compared to traditional homes.
                                                </p>
                                                <p>
                                                    Ramona helps buyers understand the details of purchasing mobile homes in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-4"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-4"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How do I calculate property taxes in Hillsborough County?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-4"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Property taxes are based on assessed value and millage rates set by the county. For Hillsborough County, you can check the Property Appraiser&apos;s website for accurate numbers.
                                                </p>
                                                <p>
                                                    Ramona can guide you in estimating taxes for homes in Tampa and surrounding areas.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-5"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-5"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What is a Property Appraiser and why do I need one in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-5"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    A property appraiser determines the market value of your home for taxes and ensures fair assessments. In Florida, each county has an office dedicated to this service.
                                                </p>
                                                <p>
                                                    Ramona helps clients interpret appraisals when buying or selling in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="faq-item">
                                <h4 className="mb_18">
                                    Investing in Real Estate
                                </h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq1"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-1-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Is Tampa a good place to invest in real estate?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Yes. Tampa Bay is one of Florida&apos;s fastest-growing markets, attracting both homeowners and investors. Strong rental demand and steady appreciation make it attractive for long-term investments.
                                                </p>
                                                <p>
                                                    Ramona provides tailored investment strategies for Tampa, St. Petersburg, and Clearwater.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-1-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What permits do I need to buy land in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Requirements depend on zoning, location, and intended use (residential vs. commercial). You may need surveys, environmental checks, and permits before building.
                                                </p>
                                                <p>
                                                    Ramona helps investors connect with local authorities to ensure compliance.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1-3"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-1-3"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What are the best types of properties for first-time investors in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1-3"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Many first-time investors start with single-family homes, duplexes, or small multi-family properties in Tampa Bay. These types of properties are generally easier to manage and finance.
                                                </p>
                                                <p>
                                                    Consider your investment goals, local market conditions, and your ability to manage the property when choosing the best type for you.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1-4"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-1-4"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How do I calculate potential ROI on a rental property in Tampa?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1-4"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    To calculate ROI (Return on Investment) for a rental property, subtract your annual operating expenses and mortgage payments from your annual rental income, then divide that number by your total investment.
                                                </p>
                                                <p>
                                                    ROI = (Annual Net Income / Total Investment) x 100%. This helps you compare different investment opportunities in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-1-5"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-1-5"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What are the tax benefits of owning investment properties in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-1-5"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq1"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Investment property owners may benefit from tax deductions on mortgage interest, property taxes, operating expenses, depreciation, and repairs. These deductions can help reduce your taxable income.
                                                </p>
                                                <p>
                                                    Consult a tax professional to understand which deductions apply to your situation and to maximize your tax benefits in Florida.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="faq-item">
                                <h4 className="mb_15">
                                    Renting &amp; Property Management
                                </h4>
                                <ul
                                    className="accordion-wrap"
                                    id="accordion-faq2"
                                >
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2-1"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2-1"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    How can I find apartments for rent near me in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2-1"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq2"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Online listings, rental platforms, and Realtors are the most common sources. Working with a Realtor gives you access to verified properties and avoids scams.
                                                </p>
                                                <p>
                                                    Ramona connects renters with safe and affordable housing in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2-2"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2-2"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What&apos;s the difference between renting an apartment and a townhome?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2-2"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq2"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Apartments are typically part of larger complexes with shared amenities, while townhomes offer more privacy and often come with private garages or yards.
                                                </p>
                                                <p>
                                                    Ramona can guide you to the right rental option based on your lifestyle and budget in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2-3"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2-3"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What does a property management company do in Tampa Bay?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2-3"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq2"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Property managers handle tenant screening, rent collection, maintenance, and legal compliance. They are especially useful for investors who don&apos;t live locally.
                                                </p>
                                                <p>
                                                    Ramona partners with trusted property management firms in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2-4"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2-4"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    Is it worth hiring a property manager for investment properties in Florida?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2-4"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq2"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    Yes, especially if you own multiple properties or live outside the area. Professional management saves time, reduces risk, and maximizes returns.
                                                </p>
                                                <p>
                                                    Ramona helps investors connect with reliable management services in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <a
                                            href="#accordion-faq-2-5"
                                            className="accordion-title collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls="accordion-faq-2-5"
                                        >
                                            <div className="heading">
                                                <div className="title text-capitalize text-title text_primary-color fw-6">
                                                    What should I include in a rental agreement for Tampa Bay properties?
                                                </div>
                                                <span className="icon icon-CaretDown"></span>
                                            </div>
                                        </a>
                                        <div
                                            id="accordion-faq-2-5"
                                            className="collapse"
                                            data-bs-parent="#accordion-faq2"
                                        >
                                            <div className="accordion-faqs-content">
                                                <p className="mb_12">
                                                    A rental agreement should clearly outline the terms of the lease, including rent amount, due date, security deposit, lease duration, maintenance responsibilities, and pet policies.
                                                </p>
                                                <p>
                                                    Make sure both landlord and tenant understand and agree to all terms to avoid future disputes in Tampa Bay.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-faq sticky-top">
                                <form
                                    className="form-faq"
                                    action={submitFAQQuestion}
                                >
                                    <div className="heading">
                                        <h5 className="mb_8">
                                            Ask Your Question
                                        </h5>
                                        <p>
                                            Ask Anything, We&apos;re Here to
                                            Help
                                        </p>
                                    </div>
                                    <fieldset>
                                        <label
                                            htmlFor="name"
                                            className="text-button text_primary-color fw-7 mb_8"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            className=""
                                            id="name"
                                            type="text"
                                            placeholder="First Name"
                                            name="text"
                                            tabIndex={2}
                                            aria-required="true"
                                            required
                                        />
                                    </fieldset>
                                    <div>
                                        <div className="text-button text_primary-color mb_8">
                                            How Can We Help You?
                                        </div>
                                        <DropdownSelect2
                                            defaultOption="Investing in Real Estate"
                                            options={[
                                                "Investing in Real Estate",
                                                "Buying a Home",
                                                "Selling a Property",
                                                "Financing Options",
                                                "Other",
                                            ]}
                                        />
                                    </div>
                                    <fieldset>
                                        <label
                                            htmlFor="comment"
                                            className="text-button text_primary-color fw-7 mb_8"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="comment"
                                            className=""
                                            rows={4}
                                            placeholder="Your Message"
                                            tabIndex={2}
                                            aria-required="true"
                                            required
                                        ></textarea>
                                    </fieldset>
                                    <button
                                        className="tf-btn btn-bg-1 btn-px-28 w-full"
                                        type="submit"
                                    >
                                        <span>Send Request</span>
                                        <span className="bg-effect"></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}