import Agents from "@/components/common/Agents";
import Banner1 from "@/components/common/Banner1";
import FAQs1 from "@/components/common/FAQs1";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/Header2";
import Hero from "@/components/homes/homepage-2/Hero";
// import Location from "@/components/homes/homepage-2/Location";
// import Populor from "@/components/homes/homepage-2/Populor";
// import Properties from "@/components/homes/homepage-2/Properties";
import TopBar from "@/components/homes/homepage-2/TopBar";
// import TopProperties from "@/components/homes/TopProperties";
import Process1 from "@/components/common/Process1";
import Testimonial1 from "@/components/common/Testimonial1";
import WhyChoose from "@/components/otherpage/about/WhyChoose";

export default function Home() {
    return (
        <>
            <TopBar />
            <Header2 />
            <Hero />
            {/* <Populor /> */}
            {/* <TopProperties /> */}
            {/* <Properties /> */}
            {/* <Location /> */}
            <div className="section-process tf-spacing-1">
                <Process1 />
            </div>
            <div className="section-why tf-spacing-1">
                <WhyChoose />
            </div>
            <div className="section-testimonials tf-spacing-1">
                <Testimonial1 />
            </div>
            <Banner1 />
            <div className="section-agents tf-spacing-1">
                <Agents />
            </div>
            <div className="section-faqs-1 tf-spacing-2">
                <FAQs1 />
            </div>
            <Footer2 />
        </>
    );
}
