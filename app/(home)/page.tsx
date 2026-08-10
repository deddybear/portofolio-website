// import Image from "next/image";

import NavbarComponent from "./components/navbar";
import HeroComponent from "./components/hero";
import AboutComponent from "./components/about";
import PortfolioComponent from "./components/portfolio";
import StackComponent from "./components/stack";
import ContactComponent from "./components/contact";
import FooterComponent from "./components/footer";
import dayjs from "dayjs";
import IsLeapYear from "dayjs/plugin/isLeapYear";
import 'dayjs/locale/id';
import FloatingButton from "./components/floating-button";


export default function Home() {

    dayjs.extend(IsLeapYear)
    dayjs.locale('id')

    const gapYearExperience = (): number => {
        const yearEnd: number = Number(dayjs().format("YYYY"))
        const yearStart: number = 2020
        return yearEnd - yearStart;
    }

    const yearNow = (): number => {
        return Number(dayjs().format("YYYY"))
    }

    const projectFinish = () => {
        return 10;
    }

    const techDomain = () => {
        return 15;
    }

    const formatPhoneID = (number: string): string => {

        // pastikan hanya digit
        const digits = number.replace(/\D/g, '');
        // asumsi format: 62 + 3 + 4 + 4 (total 13 digit)
        const match = digits.match(/^(\d{2})(\d{3})(\d{4})(\d{4})$/);
        if (!match) return number; // fallback kalau panjang beda

        return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;

    }





    return (
        <div>

            {/* Header Section Start */}
            <header id="navbar" className="bg-white">
                {/* Navbar Section */}
                <NavbarComponent />
            </header>
            {/* Header Section End */}

            <main>
                {/* Hero Section Start */}
                <section id="hero" className="px-15 py-10 bg-gray-100 lg:py-25">
                    <HeroComponent />
                </section>
                {/* Hero Section End */}

                {/* About Section Start */}
                <section id="about" className="px-15 py-15 lg:py-25">
                    <AboutComponent yearCount={gapYearExperience()} completedProjectCount={projectFinish()} techDomainCount={techDomain()} />
                </section>
                {/* About Section End */}

                {/* Portofolio Section Start */}
                <section id="portfolio" className="px-15 py-15 lg:py-25">
                    <PortfolioComponent />
                </section>
                {/* Portofolio Section Start */}

                {/* Technology Section Start */}
                <section id="stack" className="px-15 py-15 lg:py-25">
                    <StackComponent />
                </section>
                {/* Technology Section End */}

                <section id="contact" className="px-15 mb-15">
                    <ContactComponent
                        email="dedi.suharman05@gmail.com" numberWhatsapp="6287859267656"
                        numberWaFormated={formatPhoneID("6287859267656")} location="Sidoarjo, Indonesia" />
                </section>
            </main>


            {/* Footer Section Start */}
            <footer>
                <FooterComponent
                    email="dedi.suharman05@gmail.com" numberWhatsapp="6287859267656"
                    numberWaFormated={formatPhoneID("6287859267656")} year={yearNow()} location="Sidoarjo, Indonesia" />
            </footer>
            {/* Footer Section End */}

            {/* Floating Action Button */}
            <FloatingButton />
        </div>

    );
}
