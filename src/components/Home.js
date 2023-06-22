import React, { useState, useRef } from "react";
import Bgcr from "./../assets/g38559.png";
import { Container } from "react-bootstrap";

const Home = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const scrollTargetRef = useRef(null);

  const containerStyle = {
    backgroundImage: `url(${Bgcr})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "87.9vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    // marginBottom:"50px"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    zIndex: 1, // Mengatur z-index agar overlay tetap berada di atas latar belakang
  };

  const midStyle = {
    padding: "15px 20px",
    background: "transparent",
    color: "white",
    border: "6px solid #5FCF80",
    transition: "background 0.3s ease, color 0.3s ease, border 0.3s ease", // Menambahkan efek transisi saat hover
    marginBottom: "25px",
  };

  const midStyleHover = {
    color: "white",
    border: "6px solid white",
  };

  const buttonStyle = {
    padding: "10px",
    color: "white",
    border: isButtonHovered ? "2px solid #5FCF80" : "2px solid #5FCF80",
    borderRadius: "10px",
    backgroundColor: isButtonHovered ? "#5FCF80" : "transparent",
    transition: "background-color 0.3s ease, border 0.3s ease", // Menambahkan efek transisi saat hover pada background-color dan border
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const handleButtonClick = () => {
    const targetElement = scrollTargetRef.current;
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Container id="home" fluid style={containerStyle}>
      <div style={overlayStyle}>
        <div
          style={{
            ...midStyle,
            ...(isHovered && midStyleHover),
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>PPQ AL MAHIR</h2>
        </div>
        <p style={{ color: "white", marginBottom: "5px" }}>
          jl. Adi Sumarmo, RT.01/RW.07, Gawanan, Colomadu, Karanganyar, Jawa
          Tengah.
        </p>
        <p style={{ color: "white" }}>Pusat Pendidikan Al-Qur'an Al-Mahir</p>
        <button
          style={buttonStyle}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          onClick={handleButtonClick}
        >
          Lihat Selengkapnya
        </button>
      </div>
      <div
        ref={scrollTargetRef}
        id="scrollTarget"
        style={{
          position: "relative", // Menjaga posisi elemen scrollTarget agar tetap berada di dalam background
          overflowY: "scroll",
          width: "100%",
        }}
      >
        {/* Content to scroll */}
      </div>
    </Container>
  );
};

export default Home;
