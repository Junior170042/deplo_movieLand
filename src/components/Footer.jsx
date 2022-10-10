import React from 'react'

const Footer = () => {
    return (
        <>
            <footer
                className="text-center text-white"
                style={{ backgroundColor: "#f1f1f1" }}
            >
                {/* Grid container */}
                <div className="container pt-4">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com/juniorhens.vernard"
                            role="button"
                            target="_blank" rel="noopener noreferrer"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fa fa-facebook-f" />
                        </a>

                        {/* Instagram */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/invites/contact/?i=1wvdpbesps17q&utm_content=o6xi1f0"
                            role="button"
                            target="_blank" rel="noopener noreferrer"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fa fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/st-verty-vernard/"
                            role="button"
                            target="_blank" rel="noopener noreferrer"
                            data-mdb-ripple-color="dark"
                        >
                            <i className="fa fa-linkedin" />
                        </a>

                    </section>
                    {/* Section: Social media */}
                </div>

                <div
                    className="text-center text-dark p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2022 Copyright:
                    <a className="text-dark" href="m">
                        St-Verty@designer
                    </a>
                </div>

            </footer>

        </>
    )
}

export default Footer