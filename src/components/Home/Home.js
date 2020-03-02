import React from "react";
import HomeHeader from "./HomeHeader";
import HomeExperience from "./HomeExperience";
import HomeInstructions from "./HomeInstructions";
import HomeAboutUs from "./HomeAboutUs";
import HomeSummary from "./HomeSummary";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";

const Home = () => {
    return (
    <>
        <HomeHeader />
        <HomeExperience />
        <HomeInstructions />
        <HomeAboutUs />
        <HomeSummary />
        <HomeContact />
        <HomeFooter />
    </>
    )
}

export default Home;