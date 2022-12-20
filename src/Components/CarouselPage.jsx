import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import CAR1 from "../assets/car (1).png";
import CAR2 from "../assets/car (2).png";
import CAR3 from "../assets/car (3).png";

const CarouselPage = () => {
    return (
        <div>
            <Carousel className="Carousel">
              <Carousel.Item>
                <img className="image-banner" src={CAR1} />
                <Carousel.Caption>
                    Page 1
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image-banner" src={CAR2} />
                <Carousel.Caption>
                    Page 2
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="image-banner" src={CAR3} />
                <Carousel.Caption>
                    Page 3
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>      
        </div>
    );
};

export default CarouselPage;