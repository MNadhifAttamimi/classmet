import React from "react";
import Logo from "./../assets/ppq-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ig from "./../assets/ig.svg";
import fb from "./../assets/fb.svg";
import bsi from "./../assets/lg-8e918ed8e3505e362b03c856de2816f433-removebg-preview.png";

const Footer = () => {
    const footerStyle = {
        color: "rgba(0, 0, 0, 0.6)",
        padding: "40px",
        backgroundColor: "#f8f8f8",
    };

    const sectionStyle = {
        marginBottom: "20px",
    };

    const sectionTitleStyle = {
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const columnStyle = {
        marginBottom: "20px",
    };

    const contactInfoStyle = {
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
    };

    const contactIconStyle = {
        marginRight: "10px",
        color: "rgba(0, 0, 0, 0.6)",
    };

    const contactContainerStyle = {
        display: "flex",
        flexDirection: "column",
        // alignItems: 'center',
        marginBottom: "20px",
    };

    const contactTitleStyle = {
        marginBottom: "10px",
        // textAlign: 'center',
        fontWeight: "700",
    };

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        justifyContent: "space-between",
    };

    return (
        <footer style={footerStyle}>
            {/* Section: Links */}
            <section style={sectionStyle}>
                <div
                    className="text-xl-left  text-sm-start"
                    style={{ margin: "0 auto", maxWidth: "1200px" }}
                >
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-4">
                            {/* Content */}
                            <img
                                src={Logo}
                                style={{ width: "50%", marginBottom: "20px" }}
                            ></img>
                            <p style={{ textAlign: "" }}>
                                Yayasan Almahir Attarbawiyyah Surakarta hadir di
                                tengah Ummat untuk berkiprah pada bidang
                                pendidikan Islam dan bidang sosial.
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2">
                            {/* Links */}
                            <h6 style={sectionTitleStyle}>About Us</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-2">
                            {/* Links */}
                            <h6 style={sectionTitleStyle}>Follow Us</h6>
                            <p>
                                <a style={{marginRight: "20px"}}
                                    href="https://www.instagram.com/ppqalmahir/"
                                    className="text-reset"
                                >
                                    <img src={ig}></img>
                                </a>
                            
                            
                                <a
                                    href="https://m.facebook.com/ppqalmahir/"
                                    className="text-reset"
                                >
                                    <img src={fb}></img>
                                </a>
                            </p>
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col-md-3">
                            {/* Links */}
                            <div style={contactContainerStyle}>
                                <h6 style={contactTitleStyle}>Contact</h6>

                                <p style={contactInfoStyle}>
                                    <i
                                        className="fas fa-home"
                                        style={contactIconStyle}
                                    >
                                        jl. Adi Sumarmo, RT.01/RW.07, Gawanan,
                                        Colomadu, Karanganyar, Jawa Tengah.
                                    </i>
                                </p>

                                <p style={contactInfoStyle}>
                                    <i style={contactIconStyle}>
                                        <img
                                            style={{
                                                width: "40%",
                                                marginTop: "-40px",
                                                marginBottom: "-40px",
                                            }}
                                            src={bsi}
                                        ></img>
                                        <b>6565698893</b>
                                    </i>
                                </p>
                                <p className="text-start">
                                    <i
                                        className="fas fa-phone"
                                        style={contactIconStyle}
                                    ></i>
                                    +62 812-310-4431
                                </p>
                            </div>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Section: Links */}

            {/* Mobile view */}
            <section style={{ display: "none" }}>
                <div
                    style={{
                        margin: "0 auto",
                        maxWidth: "1200px",
                        textAlign: "center",
                    }}
                >
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-12">
                            {/* Content */}
                            <h6 style={sectionTitleStyle}>Company name</h6>
                            <p>
                                Here you can use rows and columns to organize
                                your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
            </section>
            {/* Mobile view */}

            {/* Copyright */}
            <div style={{ textAlign: "center", marginTop: "0px" }}>
                © {new Date().getFullYear()} By Nadhif. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
