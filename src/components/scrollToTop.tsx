//A button component that will scroll to the top of the page when the user is crolling from the bottom of the page mor than 60vh!
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 3000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    return (
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ display: showButton ? "block" : "none" }}>
            <i className="fa fa-angle-up"></i>
        </button>
    )
}