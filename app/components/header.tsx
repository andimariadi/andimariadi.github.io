import Image from "next/image";

export default function Header() {
    let year = new Date().getFullYear() - 2017
    return (
        <header className="py-2" id="page-home">
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                    <div className="text-center text-xxl-start">
                        <div className="badge bg-gradient-primary-to-secondary text-white mb-4"><div className="text-uppercase">Software Engineer</div></div>
                        <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">ANDI MARIADI</span></h1>
                        <div className="fs-3 fw-light text-muted">{ year }+ years of experience as a Web Developer and Mobile Developer specializing in mining contractors</div>
                    </div>
                </div>
                <div className="col-xxl-7">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                        <div className="profile bg-gradient-primary-to-secondary">
                            <Image className="profile-img" src={"./assets/profile.png"} alt="..." />
                            <div className="dots-1">
                                <Image alt={"dots"} src={"./dot1.svg"} width={25} height={150} style={{filter: "invert(1)"}} />
                            </div>
                            <div className="dots-2">
                                <Image alt={"dots"} src={"./dot2.svg"} width={25} height={150} />
                            </div>
                            <div className="dots-3">
                                <Image alt={"dots"} src={"./dot3.svg"} width={25} height={150} style={{filter: "invert(1)"}} />
                            </div>
                            <div className="dots-4">
                                <Image alt={"dots"} src={"./dot4.svg"} width={25} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}