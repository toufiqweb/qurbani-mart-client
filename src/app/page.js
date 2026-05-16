import Banner from "@/components/homepage/Banner";
import QurbaniGuidlines from "@/components/homepage/QurbaniGuidlines";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <QurbaniGuidlines/>
    <Footer/>
    </>
  );
}
