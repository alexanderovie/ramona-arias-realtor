"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type Agent = {
  id: number;
  name: string;
  img: string;
  socials: { icon: string; href: string }[];
};

const agents: Agent[] = [
  {
    id: 1,
    name: "Ramona Arias",
    img: "/assets/images/section/agent-1.jpg",
    socials: [
      { icon: "icon-FacebookLogo", href: "#" },
      { icon: "icon-XLogo", href: "#" },
      { icon: "icon-InstagramLogo", href: "https://www.instagram.com/ramonaariasrealtor" },
      { icon: "icon-YoutubeLogo", href: "#" },
    ],
  },
  {
    id: 2,
    name: "Our Office",
    img: "/assets/images/section/agent-2.jpg",
    socials: [
      { icon: "icon-FacebookLogo", href: "#" },
      { icon: "icon-XLogo", href: "#" },
      { icon: "icon-InstagramLogo", href: "https://www.instagram.com/ramonaariasrealtor" },
      { icon: "icon-YoutubeLogo", href: "#" },
    ],
  },
];

export default function Agents() {
  return (
    <div className="tf-container ">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="box">
            <div className="heading-section mb_32">
              <span className="sub text-uppercase fw-6 text_secondary-color-2">
                About Ramona Arias
              </span>
              <h3>Ramona Arias Realtor</h3>
            </div>
            <div className="content mb_32">
              <h6 className="mb_12">
                Licensed Real Estate Professional in Tampa Bay
              </h6>
              <p className="text-body-2">
                Newly licensed realtor ready to help you find your perfect home. 
                Licensed by the State of Florida Department of Business and Professional Regulation.
              </p>
            </div>
            <a href="/contacts" className="tf-btn btn-bg-1 btn-px-24">
              <span>Contact Ramona</span>
              <span className="bg-effect"></span>
            </a>
          </div>
        </div>
        <div className="col-lg-7 offset-xl-1 sw-layout">
          <Swiper
            className="swiper"
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={20}
            navigation={{
              prevEl: ".nav-prev-layout",
              nextEl: ".nav-next-layout",
            }}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
          >
            {agents.map((agent) => (
              <SwiperSlide key={agent.id}>
                <div className="agent-item">
                  <a href="#" className="img-style">
                    <Image
                      src={agent.img}
                      width={360}
                      height={360}
                      alt="agent"
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <ul className="social">
                    {agent.socials.map((social, idx) => (
                      <li key={idx}>
                        <a href={social.href} className={social.icon}></a>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
            <div className="sw-button nav-prev-layout">
              <i className="icon-CaretLeft"></i>
            </div>
            <div className="sw-button nav-next-layout">
              <i className="icon-CaretRight"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
