import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ust from "./../assets/20220107_145616327.jpg";
import DLA from "./../assets/IMG_1988.JPG";
import MOS from "./../assets/20220814_0802328711.jpg";

const Program = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cardStyle = {
        width: "18rem",
        margin: "10px",
        border: "none",
    };

    const cardImageStyle = {
        borderRadius: "10px",
        transition: "border 1s ease",
    };

    const handleImageHover = (e) => {
        e.target.style.border = "1px solid black";
    };

    const handleImageLeave = (e) => {
        e.target.style.border = "none";
    };

    const handleSelect = (selectedIndex, e) => {
        setActiveIndex(selectedIndex);
    };

    useEffect(() => {
        const prevButton = document.querySelector(".carousel-control-prev-icon");
        const nextButton = document.querySelector(".carousel-control-next-icon");

        if (prevButton) {
            prevButton.style.filter = "invert(100%)";
        }

        if (nextButton) {
            nextButton.style.filter = "invert(100%)";
        }
    }, []);

    return (
        <Container id="galeri">
            <div
                style={{
                    margin: "50px",
                    marginBottom: "70px",
                    textAlign: "center",
                }}
            >
                <h1>Galeri Kegiatan</h1>
            </div>
            <Carousel
                style={{ marginBottom: "150px" }}
                activeIndex={activeIndex}
                onSelect={handleSelect}
                indicators={false}
                interval={3000}
            >
                <Carousel.Item>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                style={cardImageStyle}
                                src={ust}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                src={ust}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                                style={cardImageStyle}
                            />
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                style={cardImageStyle}
                                src={MOS}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                style={cardImageStyle}
                                src={ust}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                style={cardImageStyle}
                                src={ust}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Card>

                        <Card style={cardStyle}>
                            <Card.Img
                                variant="top"
                                style={cardImageStyle}
                                src={ust}
                                onMouseEnter={handleImageHover}
                                onMouseLeave={handleImageLeave}
                            />
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Program;
