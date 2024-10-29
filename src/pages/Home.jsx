import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import { Course } from "../components/Course";
import Featured from "../components/ProductHighlights";
import { Hero } from "../components/Hero";
import { HIW } from "../components/HIW";
import ProductImages from "../components/ProductImages";
import { About } from "./About";
import UserReviewsFAQ from "./UserReviewsFAQ";
import ProductHighlights from "../components/ProductHighlights";

const Home = () => {
    return (
        <>
            <Hero />                        
            <ProductImages />
            <ProductHighlights />
            <HIW />
            <UserReviewsFAQ />
            <AboutUs />
        </>
    )
}

export default Home;
