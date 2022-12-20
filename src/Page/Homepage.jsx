import React from "react";
import NavigationBar from "../Components/NavigationBar";
import NavigationBarHomepage from "../Components/NavigationBarHomepage";
import CarouselPage from "../Components/CarouselPage";

const Homepage = () => {
    return (
        <div>
            <NavigationBarHomepage/>
            <CarouselPage />
        </div>
    );
};

export default Homepage;