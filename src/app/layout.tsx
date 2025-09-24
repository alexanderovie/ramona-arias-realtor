import { Manrope } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "photoswipe/dist/photoswipe.css";
import "swiper/css";
import "swiper/css/pagination";
import "../../public/assets/icons/icomoon/style.css";
import "../../public/assets/scss/app.scss";
import BackToTop from "@/components/common/BackToTop";
import ClientScripts from "@/components/common/ClientScripts";
import { Metadata } from "next";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ramona Arias Realtor - Professional Real Estate Services",
    description: "Professional real estate services by Ramona Arias. Find your perfect home with expert guidance and personalized service.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.variable}>
                <div id="wrapper">{children}</div>
                <ClientScripts />
                <BackToTop />
            </body>
        </html>
    );
}
