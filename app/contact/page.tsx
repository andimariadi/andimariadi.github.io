import Link from "next/link"

export default function Home() {
    return (
        <div className="container px-5 mb-5" id="page-award">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Contact</span></h1>
            <p>Hello World! I am here to provide you with the best service. How may I help you?</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-3">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="py-4 rounded-4 d-flex justify-content-center">
                                        <Link href={'https://t.me/andimariadi'} className="text-primary text-decoration-none">
                                            <div className="text-center">
                                                <i className="bi bi-telegram fs-1"></i>
                                                <p className="fs-3 d-inline mx-2">Telegram</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="py-4 rounded-4 d-flex justify-content-center">
                                        <Link href={'https://wa.me/6282152673706'} className="text-success text-decoration-none">
                                            <div className="text-center">
                                                <i className="bi bi-whatsapp fs-1"></i>
                                                <p className="fs-3 d-inline mx-2">Whatsapp</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="py-4 rounded-4 d-flex justify-content-center">
                                        <Link href={'mailto:mariadi.andi@gmail.com'} className="text-danger text-decoration-none">
                                        <div className="text-center">
                                            <i className="bi bi-envelope fs-1"></i>
                                            <p className="fs-3 d-inline mx-2">E-Mail</p>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <div className="row align-items-center gx-5">
                                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                    <div className="py-4 rounded-4 d-flex justify-content-center">
                                        <Link href={'https://www.linkedin.com/in/andimariadi/'} className="text-info text-decoration-none">
                                        <div className="text-center">
                                            <i className="bi bi-linkedin fs-1"></i>
                                            <p className="fs-3 d-inline mx-2">Linkedin</p>
                                        </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}