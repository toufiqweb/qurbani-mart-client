import Banner from "@/components/homepage/Banner";
import QurbaniGuidlines from "@/components/homepage/QurbaniGuidlines";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <QurbaniGuidlines/>
    <WhyChooseUs/>
    <Testimonials/>
    <Footer/>
    </>
  );
}
