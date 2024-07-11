import Donation from "./Components/Donation";
import Features from "./Components/Features";
import Goal from "./Components/Goal";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Volunteer from "./Components/Volunteer";
import Blog from "./Components/Blog";
import FAQ from "./Components/FAQ";
import AdvertiseBanner from "./Components/AdvertiseBanner";
import Footer from "./Components/Footer";



export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
        <Donation></Donation>
        <Features></Features>
        <Goal></Goal>
        <Volunteer></Volunteer>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <FAQ></FAQ>
        <AdvertiseBanner></AdvertiseBanner>
        <Footer></Footer>
    </div>
  );
}
