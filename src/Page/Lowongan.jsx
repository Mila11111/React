import React from "react";
import CarouselPage from "../Components/CarouselPage";
import LowonganItem from "./lowonganitem";
import NavigationBarHomepage from "../Components/NavigationBarHomepage";
import PaginationPage from "../Components/Pagination";
import SkeletonLoader from "../Components/SkeletonLoader";

const Lowongan = () => {
    return (
        <div>
            <NavigationBarHomepage />
            <LowonganItem/>
            <SkeletonLoader/>
            <PaginationPage />
        </div>
    );
};

export default Lowongan;