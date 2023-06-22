import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
import { fa2 } from "@fortawesome/free-solid-svg-icons";
import { fa3 } from "@fortawesome/free-solid-svg-icons";
import { fa4 } from "@fortawesome/free-solid-svg-icons";
import { fa5 } from "@fortawesome/free-solid-svg-icons";

const Programygbenar = () => {
    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "70px",
        marginBottom:"100px",
        padding:"0px 50px"
    };

    const cardStyle = {
        width: "300px",
        height: "400px",
        border: "2px solid black",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#5FCF80",
    };

    const circleIconStyle = {
        fontSize: "1.2rem", // Ubah ukuran angka ikon di sini
        marginRight: "5px", // Spasi antara angka dan teks
        border: "1px solid",
        padding: "5px",
        borderRadius: "100px",
        backgroundColor: "white",
    };

    return (
        <div id="program" style={containerStyle}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={cardStyle}>
                    <Card.Header
                        style={{ border: "none", backgroundColor: "#5FCF80" }}
                        as="h5"
                    >
                        <FontAwesomeIcon icon={fa1} style={circleIconStyle} />{" "}
                        TPA Al Mahir
                    </Card.Header>
                    <Card.Body style={{ marginTop: "-15px" }}>
                        <Card.Text style={{ textAlign: "left" }}>
                            - Anak-anak usia 6-13 thn.<br></br>
                            - Materi Pokok: <br />
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "-25px",
                                }}
                            >
                                Karimah dasar & tahsin, <br /> Tilawah
                                Al-Qur'an, <br /> Hafalan juz 30.
                            </p>{" "}
                            <br />
                            - Materi Penunjang: <br />
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "1px",
                                }}
                            >
                                Aqidah, Doa, Dzikir & Adab Harian, Fiqih Ibadah,
                                Siroh, Bahasa Arab dasar, Hadist - Hadist
                                pilihan, Kitabah/Khat.
                            </p>
                            - Masa Pendidikan 2 Tahun.<br /> - Ujian & terima rapot
                            setiap 1
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "1px",
                                }}
                            >
                                {" "}
                                semester (6 bulan)
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={cardStyle}>
                    <Card.Header
                        style={{ border: "none", backgroundColor: "#5FCF80" }}
                        as="h5"
                    >
                        <FontAwesomeIcon icon={fa2} style={circleIconStyle} />{" "}
                        PPQ IT Al Mahir
                    </Card.Header>
                    <Card.Body style={{ marginTop: "-15px" }}>
                        <Card.Text style={{ textAlign: "left" }}>
                            - Pondok IT setaraf SLTA{" "}
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "-25px",
                                }}
                            >
                                {" "}
                                (Khusus Ikhwan)
                            </p>
                            <br />
                            - Karantina Bahasa Arab & <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "-25px",
                                }}
                            >
                                {" "}
                                Inggris
                            </p> <br />
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "-25px",
                                }}
                            >
                                Materi Diniyyah & Tahfidzh <br /> Aqidah
                                , Fiqih, Siroh, Imla' wa Khat, dll <br />
                            </p>{" "}
                            <br />
                            - Materi It Berbasis: <br />
                            <p
                                style={{
                                    marginLeft: "10px",
                                    marginBottom: "1px",
                                }}
                            >
                                Project (FeontEnd, <br /> BackEnd, Mobile)
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={cardStyle}>
                    <Card.Header
                        style={{ border: "none", backgroundColor: "#5FCF80" }}
                        as="h5"
                    >
                        <FontAwesomeIcon icon={fa3} style={circleIconStyle} />{" "}
                        Reguler Tahsin
                    </Card.Header>
                    <Card.Body style={{ marginTop: "-15px" }}>
                        <Card.Text style={{ textAlign: "left" }}>
                            - Tersedia kelas privat
                            <p
                                style={{
                                    marginLeft: "13px",
                                    marginBottom: "-25px",
                                    marginTop: "-28px"
                                }}
                            >
                                <br /> maupun reguler
                            </p>{" "}
                            <br />
                            - Tersedia kelas ikhwan
                            <p
                                style={{
                                    marginLeft: "13px",
                                    marginBottom: "-25px",
                                    marginTop: "-28px"
                                }}
                            >
                                <br /> maupun Akhwat
                            </p>{" "}
                            <br />
                            - Menggunakan metode
                            <p
                                style={{
                                    marginLeft: "13px",
                                    marginBottom: "-25px",
                                    marginTop: "-28px"
                                }}
                            >
                                <br /> Karimah
                            </p>{" "}
                            <br />
                            - Dibimbing langsung oleh
                            <p
                                style={{
                                    marginLeft: "13px",
                                    marginBottom: "-25px",
                                    marginTop: "-28px"
                                }}
                            >
                                <br /> Asatidzah yang telah terlatih Mengajarkan Metode Karimah
                            </p>{" "}
                            <br />
                            - 3 bulan masa belajar
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={cardStyle}>
                    <Card.Header
                        style={{ border: "none", backgroundColor: "#5FCF80", fontSize:"19px" }}
                        as="h5"
                    >
                        <FontAwesomeIcon icon={fa4} style={circleIconStyle} />{" "}
                        Reguler Bahasa Arab
                    </Card.Header>
                    <Card.Body style={{ marginTop: "-15px" }}>
                        <Card.Text style={{ textAlign: "left" }}>
                            - Durusullughah <br />
                            - Nahwu & Sharaf <br />
                            - Khusus Ikhwan <br />
                            - Periode belajar 6 bulan <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={cardStyle}>
                    <Card.Header
                        style={{ border: "none", backgroundColor: "#5FCF80" }}
                        as="h5"
                    >
                        <FontAwesomeIcon icon={fa5} style={circleIconStyle} />{" "}
                        Kelas Tahfidz
                    </Card.Header>
                    <Card.Body style={{ marginTop: "-15px" }}>
                        <Card.Text style={{ textAlign: "left" }}>
                            - Setoran hafalan juz 1-3, & <p
                                style={{
                                    marginLeft: "13px",
                                    marginBottom: "-25px",
                                    marginTop: "-28px"
                                }}
                            >
                                <br /> 28-30
                            </p>{" "}
                            <br />
                            - Pembelajaran sepekan 2x<br />
                            - Periode belajar 6 bulan<br />
                            - Target 6 bulan hafal 3 juz<br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Programygbenar;
