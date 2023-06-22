import { Container } from "react-bootstrap";

const Tentang = () => {
    return (
        <Container>
            <div id="tentang" style={{ marginTop: "40px", padding: "0px 35px" }}>
                <h1 style={{ color: "black", marginBottom: "30px" }}>
                    Tentang Al-Mahir
                </h1>
                <p>
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit..."
                </p>
                <p style={{ marginTop: "-10px", fontSize: "13px" }}>
                    "There is no one who loves pain itself, who seeks after it
                    and wants to have it, simply because it is pain..."
                </p>
                <hr
                    style={{
                        background: "black",
                        height: "1px",
                        border: "none",
                    }}
                />
                <p style={{ textAlign: "justify" }}>
                    Yayasan Almahir Attarbawiyyah Surakarta hadir di tengah
                    Ummat untuk berkiprah pada bidang pendidikan Islam dan
                    bidang sosial. Lebih khusus dalam bidang pendidikan Islam
                    melihat kebutuhan masyarakat akan SDM yang bertakwa,
                    berakhlak, hafizh al-Qur’an, dan menguasai ilmu Tekhnologi
                    (IT).{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                    Untuk itu sangat penting kebutuhan ini untuk direalisasikan,
                    bentuk realisasi tersebut adalah sekolah Boarding School
                    dengan nama Pondok Pesantren Qur’an dan IT Al-Mahir
                    (PPQITA). Sebuah sekolah dengan design perpaduan kurikulum
                    Ilmu Diniyyah, Umum, dan IT.{" "}
                </p>
                <p style={{ textAlign: "justify" }}>
                    Dalam proses pendidikan, kami selalu mengupayakan kolaborasi
                    ilmu teori dan praktek, hal ini penting untuk mewujudkan SDM
                    yang benar-benar unggul dan profesional. Untuk itu, ditengah
                    proses pendidikan peserta didik diamanahi beberapa project
                    untuk mengasah keterampilannya, terlebih pada bidang
                    keilmuan IT. Selain itu, peserta didik sejak awal dibiasakan
                    untuk penerapan bilingual, Arabic dan English. Harapan besar
                    dari output PPQITA adalah SDM yang memahami dengan baik Ilmu
                    Diniyyah, berwawasan luas, dan ahli dibidang IT.{" "}
                </p>
            </div>
        </Container>
    );
};

export default Tentang;
