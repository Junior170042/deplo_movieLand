const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/juniorhens.vernard",
        icon: "fa fa-facebook-f",
        label: "Facebook"
    },
    {
        href: "https://www.instagram.com/invites/contact/?i=1wvdpbesps17q&utm_content=o6xi1f0",
        icon: "fa fa-instagram",
        label: "Instagram"
    },
    {
        href: "https://www.linkedin.com/in/st-verty-vernard/",
        icon: "fa fa-linkedin",
        label: "LinkedIn"
    }
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center text-white footer-bg">
            {/* Grid container */}
            <div className="container pt-4">
                {/* Section: Social media */}
                <section className="mb-4">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.label}
                            className="btn btn-link btn-floating btn-lg text-white m-1"
                            href={link.href}
                            role="button"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            <i className={link.icon} />
                        </a>
                    ))}
                </section>
            </div>

            <div className="text-center text-white p-3 copyright-bg">
                © {currentYear} Copyright:
                <a className="text-white ms-1" href="m">
                    J7Coder St-Verty@designer
                </a>
            </div>
        </footer>
    );
};

export default Footer;