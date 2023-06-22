import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Logo from "./../assets/ppq-w.png"

export default function Navigabar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () =>
            window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <Navbar className="px-xl-5 px-sm-0 px-md-4" bg="light" expand="lg">
                <img style={{width: "200px"}} alt="logo" src={Logo}></img>
            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleToggleNav}
            />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="/#home" className="mr-2">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/#tentang" className="mr-2">
                        Tentang
                    </Nav.Link>
                    <Nav.Link href="/#program" className="mr-2">
                        Program
                    </Nav.Link>
                    <Nav.Link href="/#galeri" className="mr-2">
                        Galeri
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
