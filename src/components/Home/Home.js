import React from "react";
import HomeHeader from "./HomeHeader";
import HomeStatistics from "./HomeStatistics";
import HomeInstructions from "./HomeInstructions";
import HomeAboutUs from "./HomeAboutUs";
import HomeSummary from "./HomeSummary";
import HomeContact from "./HomeContact";
import * as Scroll from 'react-scroll';
const Element = Scroll.Element;

const Home = () => {
    return (
    <>
        <Element name="/"><HomeHeader/></Element>
        <Element name="HomeInstructions"><HomeStatistics /></Element>
        <HomeInstructions />
        <Element name="HomeAboutUs"><HomeAboutUs /></Element>
        <Element name="HomeSummary"><HomeSummary /></Element>
        <Element name="HomeContact"><HomeContact /></Element>
    </>
    )
}

export default Home;