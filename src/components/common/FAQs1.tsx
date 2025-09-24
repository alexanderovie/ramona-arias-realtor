import Image from 'next/image';
import React from 'react'

const faqsData = [
  {
    question: "How do I start the home buying process?",
    answer:
      "The home buying process begins with getting pre-approved for a mortgage to understand your budget. Next, we'll discuss your needs, preferences, and timeline. I'll help you search for properties in Tampa Bay, schedule viewings, and guide you through making competitive offers. Once under contract, I'll coordinate inspections, appraisals, and closing details to ensure a smooth transaction.",
    id: "accordion-faq-1",
    expanded: false,
  },
  {
    question: "What costs are involved in buying a home?",
    answer:
      "Beyond the down payment, you'll need to budget for closing costs (typically 2-5% of home price), which include loan origination fees, title insurance, appraisal, inspection, and escrow fees. In Florida, you'll also have property taxes, homeowners insurance, and potentially HOA fees. I'll provide a detailed breakdown of all costs during our consultation to help you plan your budget effectively.",
    id: "accordion-faq-2",
    expanded: true,
  },
  {
    question: "How long does it take to buy a home?",
    answer:
      "The timeline varies, but typically takes 30-45 days from accepted offer to closing. Factors include loan processing time, inspection negotiations, and title work. In Tampa Bay's competitive market, having pre-approval and being ready to move quickly on properties you love is crucial. I'll help you prepare and streamline the process to close as efficiently as possible.",
    id: "accordion-faq-3",
    expanded: false,
  },
  {
    question: "Can I buy a home without a real estate agent?",
    answer:
      "While technically possible, it's not recommended, especially in Tampa Bay's competitive market. As your agent, I provide market expertise, negotiate on your behalf, handle complex paperwork, coordinate with lenders and inspectors, and ensure you don't miss important deadlines. My services are typically free to buyers as the seller pays the commission, so you get professional representation at no cost to you.",
    id: "accordion-faq-4",
    expanded: false,
  },
  {
    question: "Do I need to sell my current home before buying a new one?",
    answer:
      "Not necessarily! You have several options: sell first and rent temporarily, buy first with a bridge loan, or make your new purchase contingent on selling your current home. Each approach has pros and cons depending on your financial situation and market conditions. I'll help you evaluate the best strategy for your specific circumstances in the Tampa Bay market.",
    id: "accordion-faq-5",
    expanded: false,
  },
];

export default function FAQs1() {
  return (
    <div className="tf-container">
      <div className="tf-grid-layout lg-col-2">
        <div className="box-faqs tf-animate-1">
          <div className="thumbs">
            <Image
              src="/assets/images/section/section-faq.jpg"
              width={600}
              height={660}
              alt="section-faq"
            />
          </div>
          <div className="content">
            <h3 className="title text_white mb_12">Get in Touch with Us</h3>
            <p className="text_white text-body-2 mb_20">
              Reach out today for expert real estate advice, personalized support, and a dedicated team ready to guide you every step of the way.
            </p>
            <a href="/contacts" className="tf-btn btn-bg-1 btn-px-28">
              <span>Schedule a Consultation</span>
              <span className="bg-effect"></span>
            </a>
          </div>
        </div>
        <div className="wrap-accordion">
          <div className="heading-section mb_48">
            <span className="sub text-uppercase fw-6 text_secondary-color-2">FAQs</span>
            <h3>Ask Us Anything About Home Buying & Selling</h3>
          </div>
          <ul className="accordion-wrap" id="accordion-faq">
            {faqsData.map((faq) => (
              <li className="accordion-item" key={faq.id}>
                <a
                  href={`#${faq.id}`}
                  className={`accordion-title${faq.expanded ? " " : " collapsed"}`}
                  data-bs-toggle="collapse"
                  aria-expanded={faq.expanded ? "true" : "true"}
                  aria-controls={faq.id}
                >
                  <div className="heading">
                    <h6 className="title">{faq.question}</h6>
                    <span className="icon icon-CaretDown"></span>
                  </div>
                </a>
                <div
                  id={faq.id}
                  className={`collapse${faq.expanded ? " show" : ""}`}
                  data-bs-parent="#accordion-faq"
                >
                  <div className="accordion-faqs-content">
                    <p className="text-body-1">{faq.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
