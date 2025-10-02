import Image from 'next/image';
import React from 'react'

const faqsData = [
  {
    question: "Where can I find houses for sale near me in Tampa Bay?",
    answer:
      "The best way is to use MLS listings and work with a licensed Realtor who has access to the latest properties. In Tampa, St. Petersburg, and Clearwater, new homes appear daily and often sell quickly. 👉 Ramona can create a customized property search for your preferred neighborhoods.",
    id: "accordion-faq-1",
    expanded: false,
  },
  {
    question: "How do I calculate closing costs in Tampa?",
    answer:
      "Closing costs usually range from 2% to 5% of the purchase price and include appraisal, title insurance, and local taxes. Costs vary by county and lender. 👉 Contact Ramona for a personalized estimate based on your target property.",
    id: "accordion-faq-2",
    expanded: true,
  },
  {
    question: "Is Tampa a good place to invest in real estate?",
    answer:
      "Yes. Tampa Bay is one of Florida's fastest-growing markets, attracting both homeowners and investors. Strong rental demand and steady appreciation make it attractive for long-term investments. 👉 Ramona provides tailored investment strategies for Tampa, St. Petersburg, and Clearwater.",
    id: "accordion-faq-3",
    expanded: false,
  },
  {
    question: "How can I find apartments for rent near me in Tampa Bay?",
    answer:
      "Online listings, rental platforms, and Realtors are the most common sources. Working with a Realtor gives you access to verified properties and avoids scams. 👉 Ramona connects renters with safe and affordable housing in Tampa Bay.",
    id: "accordion-faq-4",
    expanded: false,
  },
  {
    question: "What does a property management company do in Tampa Bay?",
    answer:
      "Property managers handle tenant screening, rent collection, maintenance, and legal compliance. They are especially useful for investors who don't live locally. 👉 Ramona partners with trusted property management firms in Tampa Bay.",
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
